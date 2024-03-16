import Admin_Page from "../Pages/Admin_Page";
import Menu_Page from "../Pages/Menu_Page";

export const routes = [
  {path: "/", element: Menu_Page},
  {path: "/admin", element: Admin_Page},
  {path: "*", element: Menu_Page}
];