import supabase from "../services/supabase";

export type settingsDataTypes = {
  order_qty?: number;
  tax_rate?: number;
};

const { data, error } = await supabase.from("settings").select("*").single();
export async function getSetting() {
  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
  return data;
}

export async function updateSettings(newSetting: settingsDataTypes) {
  console.log(newSetting);
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
