import { useEffect, lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "./contexts/LanguageContext";
import { injectYouTube1080pGlobally } from "./utils/youtube-utils";
import { initializeSEOMeta } from "./utils/seo-meta";
import CriticalPreload from "./components/critical-preload";
import Home from "@/pages/home";

const BlogPage = lazy(() => import("@/pages/blog"));
const SEOBlogPage = lazy(() => import("@/pages/seo-blog"));
const SEOBlogArticle = lazy(() => import("@/pages/seo-blog-article"));
const BlogDashboard = lazy(() => import("@/pages/blog-dashboard"));
const SEOBlogAdmin = lazy(() => import("@/pages/seo-blog-admin"));
const TermsOfService = lazy(() => import("@/pages/terms"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy"));
const CookiePolicy = lazy(() => import("@/pages/cookies"));
const SecurityPolicy = lazy(() => import("@/pages/security"));
const NotFound = lazy(() => import("@/pages/not-found"));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#155d29] border-t-transparent"></div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<LoadingFallback />}>
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
    </Suspense>
  );
}

function App() {
  useEffect(() => {
    initializeSEOMeta();
    injectYouTube1080pGlobally();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <CriticalPreload />
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
