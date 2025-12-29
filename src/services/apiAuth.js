import supabase from "./supabase";

export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // Prepare updates object
  const updates = {};
  if (password) updates.password = password;
  if (fullName) updates.data = { fullName };

  // Update user data
  const { data, error } = await supabase.auth.updateUser(updates);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // Update avatar image
  const fileName = `avatar-${data.user.id}-${Date.now()}`;
  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar, {
      upsert: true,
    });

  if (uploadError) throw new Error(uploadError.message);

  // Get the Public URL
  const {
    data: { publicUrl },
  } = supabase.storage.from("avatars").getPublicUrl(fileName);

  // Update user metadata with the new URL
  const { data: updateData, error: updateError } =
    await supabase.auth.updateUser({
      data: {
        avatar: publicUrl,
      },
    });

  if (updateError) throw new Error(updateError.message);
  console.log("updateData:", updateData);

  return updateData;
}
