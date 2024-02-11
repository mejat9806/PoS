import AddProduct from "../AddProduct/AddProduct";
import Button from "../UI/Button";
import DropDownMenus from "../UI/Menus";
import ModalWindow from "../UI/ModalWindow";
import SettingForm from "../setting/SettingForm";
function Setting() {
  return (
    <ModalWindow>
      <DropDownMenus>
        <div className="flex flex-col items-center h-svh mx-auto gap-7">
          <h1 className="capitalize font-extrabold font-roboto text-6xl text-center mb-5">
            setting
          </h1>
          <div className=" bg-white p-5 border-2 border-gray-300 rounded-md">
            <SettingForm />
          </div>
          <ModalWindow.OpenFunction opens="addItem">
            <Button>Add New Product</Button>
          </ModalWindow.OpenFunction>
        </div>
        <ModalWindow.WindowFunction name="addItem">
          <AddProduct />
        </ModalWindow.WindowFunction>
      </DropDownMenus>
    </ModalWindow>
  );
}

export default Setting;
