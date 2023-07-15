import { Route, Routes } from "react-router-dom";
import ResetPassword from "../layouts/ResetPassword";
import ChangePasswordInput from "../components/ResetPassword/ChangePasswordInput";
import PasswordResetSuccessfully from "../components/ResetPassword/PasswordResetSuccessfully";
import EmailSent from "../components/ResetPassword/EmailSent";
import UserType from "../pages/UserType";
import SignUpAsServiceProvider from "../pages/SignUpAsServiceProvider";
import SignUpAsClient from "../pages/SignUpAsClient";
import ServiceProviderProfile from "../layouts/ServiceProviderProfile";
import Landing from "../components/ServiceProviderProfile/Landing";
import Catalog from "../components/ServiceProviderProfile/Catalog";
import CreateCatalog from "../components/ServiceProviderProfile/CreateCatalog";
import CreatePost from "../components/ServiceProviderProfile/CreatePost";
import OrderDeals from "../components/ServiceProviderProfile/OrderDeals";
import PersonalInfo from "../components/ServiceProviderProfile/PersonalInfo";
import NotFound from "../error_pages/NotFound";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Post from "../components/ServiceProviderProfile/Post";
import ProfileDetails from "../components/ServiceProviderProfile/ProfileDetails";

function AppRoutes({ theme }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login check={theme} />} />

      <Route path="/reset-password" element={<ResetPassword check={theme} />}>
        <Route index element={<ChangePasswordInput />} />
        <Route
          path="/reset-password/success"
          element={<PasswordResetSuccessfully />}
        />
        <Route path="/reset-password/email-sent" element={<EmailSent />} />
      </Route>

      <Route path="/signup-as" element={<UserType />} />

      <Route
        path="/signup-as-client"
        element={<SignUpAsClient check={theme} />}
      />
      <Route
        path="/signup-as-service-provider"
        element={<SignUpAsServiceProvider check={theme} />}
      />

      <Route path="/profile" element={<ServiceProviderProfile />}>
        <Route index element={<Landing />} />

        <Route path="/profile/catalog" element={<Catalog />} />
        <Route path="/profile/create-catalog" element={<CreateCatalog />} />

        <Route path="/profile/post" element={<Post />} />
        <Route path="/profile/create-post" element={<CreatePost />} />

        <Route path="/profile/order-deals" element={<OrderDeals />} />

        <Route path="/profile/personal-info" element={<PersonalInfo />} />
        <Route
          path="/profile/edit-profile-details"
          element={<ProfileDetails />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
