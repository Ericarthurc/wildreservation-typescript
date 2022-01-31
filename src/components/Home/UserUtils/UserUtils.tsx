import Deleter from "./Deleter";
import Requester from "./Requester";
import Updater from "./Updater";

const UserUtils = () => {
  return (
    <>
      <h3>User Utils</h3>
      <Updater></Updater>
      <Deleter></Deleter>
      <Requester></Requester>
    </>
  );
};

export default UserUtils;
