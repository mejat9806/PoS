import supabase from "../services/supabase";

export type settingsDataTypes = {
  order_qty?: number;
  tax_rate?: number;
};

export async function getSetting() {
  const { data, error } = await supabase.from("settings").select("*").single();
  if (error) {
    console.log();
    throw new Error(error.message);
  }
  return data;
}

export async function updateSettings(newSetting: settingsDataTypes) {
  console.log();
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();
  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  return data;
}
