import AwaitingRequest from "../components/AwaitingRequest/AwaitingRequest";
import ManualInput from "../components/ManualInput/ManualInput";
import RegisterExit from "../components/RegisterExit/RegisterExit";
import ScanDocument from '../components/ScanDocument/ScanDocument';
import ScanQR from '../components/ScanQR/ScanQR';

const Routes = [
  {
    path: "/awaitingRequest",
    icon: 'InboxIcon',
    sidebarName: "AwaitingRequest",
    component: AwaitingRequest,
  },
  {
    path: "/manualInput",
    icon: 'InboxIcon',
    sidebarName: "ManualInput",
    component: ManualInput,
  },
  {
    path: "/scanDocument",
    icon: 'InboxIcon',
    sidebarName: "ScanDocument",
    component: ScanDocument,
  },
  {
    path: "/scanQR",
    icon: 'InboxIcon',
    sidebarName: "ScanQR",
    component: ScanQR,
  },
  {
    path: "/registerExit",
    icon: 'InboxIcon',
    sidebarName: "RegisterExit",
    component: RegisterExit,
  },
];

export default Routes;
