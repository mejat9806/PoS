import SettingForm from "../setting/SettingForm";
function Setting() {
  return (
    <div className="flex flex-col items-center h-svh mx-auto">
      <h1 className="capitalize font-extrabold font-roboto text-4xl text-center mb-5">
        setting
      </h1>
      <div className=" bg-white p-5 border-2 border-gray-300 rounded-md">
        <SettingForm />
      </div>
    </div>
  );
}

export default Setting;
