import * as Routes from "./const";
import SignPage from "../pages/signPage.js"
import HomePage from "../pages/HomePage";
import ClientNotificationPage from "../pages/clientNotificationPage";
import ClientPolicyPage from "../pages/clientPolicyPage";
import ClientClaimPage from "../pages/clientClaimPage";
import clientPaymentPage from "../pages/clientPaymentPage";
import ClientPersonalInformation from "../pages/clientPersonalInformation";
import employeeHomePage from "../pages/employeeHomePage";
import EmployeeCustomerLibrary from "../pages/employeeCustomerLibrary";
import EmployeeNewCustomer from "../pages/employeeNewCustomer";
import EmployeeNewPolicy from "../pages/employeeNewPolicy";
import EmployeeNewCustomerValidation from "../pages/employeeNewCustomerValidation";
import EmployeeApprove from "../pages/employeeApprove";
import employeeHomeClaims from "../pages/employeeHomeClaims";
import EmployeeHomePayments from "../pages/employeeHomePayments";
import employeeNewPolicy from "../pages/employeeNewPolicy";
import employeeHomePolicy from "../pages/employeeHomePolicy";
import EmployeeHomeClaimAdvice from "../pages/employeeHomeClaimAdvice";
import EmployeeHomeMessages from "../pages/employeeHomeMessages";

export const routes = [
    {
        path: Routes.LOGIN_ROUTE,
        Component: SignPage
    }
];

export const userRoutes = [
    {
        path: Routes.HOME_ROUTE,
        Component: HomePage,
    },
    {
        path: Routes.NOTIFICATION,
        Component: ClientNotificationPage,
    },
    {
        path: Routes.POLICIES_ROUTE,
        Component: ClientPolicyPage,
    },
    {
        path: Routes.CLAIMS_ROUTE,
        Component: ClientClaimPage,
    },
    {
        path: Routes.PAYMENTS_ROUTE,
        Component: clientPaymentPage,
    },
    {
        path: Routes.PERSONAL_ROUTE,
        Component: ClientPersonalInformation,
    }
];

export const employeeRoutes = [
    {
        path: Routes.EMPLOYEE_HOME_ROUTE,
        Component: employeeHomePage,
    },
    {
        path: Routes.EMPLOYEE_CUSTOMER_LIBRARY_ROUTE,
        Component: EmployeeCustomerLibrary,
    },
    {
        path: Routes.EMPLOYEE_NEW_CUSTOMER,
        Component: EmployeeNewCustomer,
    },{
        path: Routes.EMPLOYEE_HOME_CLAIMS,
        Component: employeeHomeClaims,
    },
    {
      path: Routes.EMPLOYEE_HOME_POLICY,
        Component: employeeHomePolicy,
    },
    {
        path: Routes.EMPLOYEE_HOME_NOTIFICATIONS,
        Component: EmployeeHomeMessages,
    },
    {
        path: Routes.EMPLOYEE_HOME_PAYMENTS,
        Component: EmployeeHomePayments,
    },
    {
        path: Routes.EMPLOYEE_NEW_CUSTOMER_POLICY_SELECT,
        Component: EmployeeNewPolicy,
    },
    {
        path: Routes.EMPLOYEE_NEW_CUSTOMER_VALIDATION,
        Component: EmployeeNewCustomerValidation,
    },
    {
        path: Routes.EMPLOYEE_NEW_CUSTOMER_APPROVE,
        Component: EmployeeApprove,
    },
    {
        path: Routes.EMPLOYEE_HOME_CLAIMS_ADVICE,
        Component: EmployeeHomeClaimAdvice,
    }
]

