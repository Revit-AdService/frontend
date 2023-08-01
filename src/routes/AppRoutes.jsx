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
import Posts from "../components/ServiceProviderProfile/Posts";
import ProfileDetails from "../components/ServiceProviderProfile/ProfileDetails";
import Notifications from "../pages/Notifications";
import Wallet from "../pages/Wallet";
import Withdraw from "../pages/Withdraw";
import SearchFeed from "../pages/SearchFeed";
import ViewProfile from "../layouts/ViewProfile";
import ViewLandpage from "../components/ViewProfile/ViewLandpage";

function AppRoutes({ theme }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/search/:searchTerm" element={<SearchFeed />} />

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

      <Route path="/profile/:user_id" element={<ServiceProviderProfile />}>
        <Route index element={<Landing />} />

        <Route path="/profile/:user_id/catalog" element={<Catalog />} />
        <Route
          path="/profile/:user_id/create-catalog"
          element={<CreateCatalog />}
        />

        <Route path="/profile/:user_id/posts" element={<Posts />} />
        <Route path="/profile/:user_id/create-post" element={<CreatePost />} />

        <Route path="/profile/:user_id/order-deals" element={<OrderDeals />} />

        <Route
          path="/profile/:user_id/personal-info"
          element={<PersonalInfo />}
        />
        <Route
          path="/profile/:user_id/edit-profile-details"
          element={<ProfileDetails />}
        />
      </Route>

      <Route path="/view-profile/:profile_id" element={<ViewProfile />}>
        <Route index element={<ViewLandpage />} />
      </Route>

      <Route path="notifications" element={<Notifications />} />

      <Route path="wallet" element={<Wallet />} />

      <Route path="withdraw" element={<Withdraw />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
