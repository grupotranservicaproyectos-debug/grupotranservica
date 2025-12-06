import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "./contexts/LanguageContext";
import { injectYouTube1080pGlobally } from "./utils/youtube-utils";
import Home from "@/pages/home";
import BlogPage from "@/pages/blog";
import SEOBlogPage from "@/pages/seo-blog";
import SEOBlogArticle from "@/pages/seo-blog-article";
import BlogDashboard from "@/pages/blog-dashboard";
import SEOBlogAdmin from "@/pages/seo-blog-admin";
import TermsOfService from "@/pages/terms";
import PrivacyPolicy from "@/pages/privacy";
import CookiePolicy from "@/pages/cookies";
import SecurityPolicy from "@/pages/security";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/seo-blog" component={SEOBlogPage} />
      <Route path="/seo-blog/admin" component={SEOBlogAdmin} />
      <Route path="/seo-blog/:slug" component={SEOBlogArticle} />
      <Route path="/admin/blog-dashboard" component={BlogDashboard} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/cookies" component={CookiePolicy} />
      <Route path="/security" component={SecurityPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    injectYouTube1080pGlobally();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
