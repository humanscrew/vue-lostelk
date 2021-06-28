// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.

const Home = () =>
  import(/* webpackChunkName: "Home" */ "@/views/Home/Home.vue");

const MenuSelector = () =>
  import(
    /* webpackChunkName: "Home" */ "@/views/Home/HomePages/MenuSelector.vue"
  );

const About = () =>
  import(/* webpackChunkName: "Home" */ "@/views/Home/HomePages/About.vue");

const Welcome = () =>
  import(/* webpackChunkName: "Home" */ "@/views/Home/HomePages/Welcome.vue");

const Login = () =>
  import(/* webpackChunkName: "Login" */ "@/views/Login/Login.vue");

const Layout = () =>
  import(/* webpackChunkName: "Layout" */ "@/views/Layout/Layout.vue");

const Upload = () =>
  import(/* webpackChunkName: "Components" */ "@/components/Upload/Upload.vue");

// const HandsOnTable = () =>
//   import(
//     /* webpackChunkName: "Components" */ "@/components/HandsOnTable/HandsOnTable.vue"
//   );

const FinancialAccounting = () =>
  import(
    /* webpackChunkName: "Financial" */ "@/views/Function/Financial/FinancialAccounting.vue"
  );
const CashFlow = () =>
  import(
    /* webpackChunkName: "Financial" */ "@/views/Function/Financial/CashFlow.vue"
  );
const Bookkeeping = () =>
  import(
    /* webpackChunkName: "Financial" */ "@/views/Function/Financial/Bookkeeping.vue"
  );
const FinancialFlow = () =>
  import(
    /* webpackChunkName: "Financial" */ "@/views/Function/Financial/FinancialFlow.vue"
  );

const CashManagement = () =>
  import(
    /* webpackChunkName: "FundsManagement" */ "@/views/Function/FundsManagement/CashManagement.vue"
  );
const BankDeposit = () =>
  import(
    /* webpackChunkName: "FundsManagement" */ "@/views/Function/FundsManagement/BankDeposit.vue"
  );
const FundsChecking = () =>
  import(
    /* webpackChunkName: "FundsManagement" */ "@/views/Function/FundsManagement/FundsChecking.vue"
  );
const FundsFlow = () =>
  import(
    /* webpackChunkName: "FundsManagement" */ "@/views/Function/FundsManagement/FundsFlow.vue"
  );

const Appropriation = () =>
  import(
    /* webpackChunkName: "WorkFlow" */ "@/views/Function/WorkFlow/Appropriation.vue"
  );
const Reimbursement = () =>
  import(
    /* webpackChunkName: "WorkFlow" */ "@/views/Function/WorkFlow/Reimbursement.vue"
  );
const Approval = () =>
  import(
    /* webpackChunkName: "WorkFlow" */ "@/views/Function/WorkFlow/Approval.vue"
  );
const CarriedForward = () =>
  import(
    /* webpackChunkName: "WorkFlow" */ "@/views/Function/WorkFlow/CarriedForward.vue"
  );

const TicketOrder = () =>
  import(
    /* webpackChunkName: "TicketManagement" */ "@/views/Function/TicketManagement/TicketOrder.vue"
  );
const OfflineTicket = () =>
  import(
    /* webpackChunkName: "TicketManagement" */ "@/views/Function/TicketManagement/OfflineTicket.vue"
  );
const TicketCollection = () =>
  import(
    /* webpackChunkName: "TicketManagement" */ "@/views/Function/TicketManagement/TicketCollection.vue"
  );
const TicketAdjustment = () =>
  import(
    /* webpackChunkName: "TicketManagement" */ "@/views/Function/TicketManagement/TicketAdjustment.vue"
  );

export {
  Home,
  MenuSelector,
  About,
  Welcome,
  Login,
  Layout,
  Upload,
  // HandsOnTable,
  FinancialAccounting,
  CashFlow,
  Bookkeeping,
  FinancialFlow,
  CashManagement,
  BankDeposit,
  FundsChecking,
  FundsFlow,
  Appropriation,
  Reimbursement,
  Approval,
  CarriedForward,
  TicketOrder,
  OfflineTicket,
  TicketCollection,
  TicketAdjustment,
};
