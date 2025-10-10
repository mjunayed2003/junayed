"use client";
import Link from "next/link";
import {
  FaBlog,
  FaExpand,
  FaHouseChimneyMedical,
  FaNetworkWired,
  FaRegEnvelope,
  FaRegEnvelopeOpen,
  FaTransgender,
  FaUserCheck,
  FaUserPen,
  FaTextWidth,
  FaHive,
} from "react-icons/fa6";
import { usePathname } from "next/navigation";

const DashboardMasterLayout = ({ children }) => {
  const pathname = usePathname();

  const linkClass = (path) =>
    `flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
      pathname === path ? "text-theme font-semibold" : "text-base"
    }`;

  return (
    <section className="bg-[#303841]">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[280px] h-screen fixed overflow-y-scroll">
          <div className="border-r border-[#4b5563] bg-[#36404A] p-4 shadow-xl">
            <div className="p-4">
              <img
                src="/assets/images/junayed2.png"
                alt="Profile"
                className="w-[180px]"
              />
            </div>

            {/* Sidebar Navigation */}
            <ul className="mt-8 grid gap-4">
              {/* Dashboard */}
              <li className="border-b border-border">
                <Link href="/dashboard" className={linkClass("/dashboard")}>
                  <FaHive /> Dashboard
                </Link>
              </li>

              {/* Pages */}
              <li className="border-b border-border">
                <span className="px-4 py-2 block text-base text-text">Pages</span>
                <ul className="grid gap-2 py-2">
                  <li>
                    <Link
                      href="/dashboard/home-page-content-edit"
                      className={linkClass("/dashboard/home-page-content-edit")}
                    >
                      <FaHouseChimneyMedical /> Home Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/about-page-content-edit"
                      className={linkClass("/dashboard/about-page-content-edit")}
                    >
                      <FaUserPen /> About Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/portfolio-page-content-edit"
                      className={linkClass("/dashboard/portfolio-page-content-edit")}
                    >
                      <FaTransgender /> Portfolio Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/service-page-content-edit"
                      className={linkClass("/dashboard/service-page-content-edit")}
                    >
                      <FaNetworkWired /> Service Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/blog-page-content-edit"
                      className={linkClass("/dashboard/blog-page-content-edit")}
                    >
                      <FaBlog /> Blog Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/contact-page-content-edit"
                      className={linkClass("/dashboard/contact-page-content-edit")}
                    >
                      <FaRegEnvelopeOpen /> Contact Page
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Profile */}
              <li className="border-b border-border">
                <span className="px-4 py-2 block text-base text-text">Profile</span>
                <ul className="grid gap-2 py-2">
                  <li>
                    <Link
                      href="/dashboard/my-profile"
                      className={linkClass("/dashboard/my-profile")}
                    >
                      <FaUserCheck /> My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/inbox"
                      className={linkClass("/dashboard/inbox")}
                    >
                      <FaRegEnvelope /> Inbox
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Blog */}
              <li className="border-b border-border">
                <span className="px-4 py-2 block text-base text-text">Blog</span>
                <ul className="grid gap-2 py-2">
                  <li>
                    <Link
                      href="/dashboard/blog/create-new-blog"
                      className={linkClass("/dashboard/blog/create-new-blog")}
                    >
                      <FaTextWidth /> Create New Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/blog/all-blog"
                      className={linkClass("/dashboard/blog/all-blog")}
                    >
                      <FaExpand /> All Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/blog/all-comment"
                      className={linkClass("/dashboard/blog/all-comment")}
                    >
                      <FaExpand /> All Comment
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Portfolio */}
              <li className="border-b border-border">
                <span className="px-4 py-2 block text-base text-text">Portfolio</span>
                <ul className="grid gap-2 py-2">
                  <li>
                    <Link
                      href="/dashboard/portfolio/create-new-portfolio"
                      className={linkClass("/dashboard/portfolio/create-new-portfolio")}
                    >
                      <FaTextWidth /> Create New Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/portfolio/all-portfolio"
                      className={linkClass("/dashboard/portfolio/all-portfolio")}
                    >
                      <FaExpand /> All Portfolio
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Service */}
              <li className="border-b border-border">
                <span className="px-4 py-2 block text-base text-text">Service</span>
                <ul className="grid gap-2 py-2">
                  <li>
                    <Link
                      href="/dashboard/service/create-new-service"
                      className={linkClass("/dashboard/service/create-new-service")}
                    >
                      <FaTextWidth /> Create New Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/service/all-service"
                      className={linkClass("/dashboard/service/all-service")}
                    >
                      <FaExpand /> All Service
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Experience */}
              <li className="border-b border-border">
                <span className="px-4 py-2 block text-base text-text">Experience</span>
                <ul className="grid gap-2 py-2">
                  <li>
                    <Link
                      href="/dashboard/experience/create-new-experience"
                      className={linkClass("/dashboard/experience/create-new-experience")}
                    >
                      <FaTextWidth /> Create Experience
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/experience/all-experience"
                      className={linkClass("/dashboard/experience/all-experience")}
                    >
                      <FaExpand /> All Experience
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Education */}
              <li className="border-b border-border">
                <span className="px-4 py-2 block text-base text-text">Education</span>
                <ul className="grid gap-2 py-2">
                  <li>
                    <Link
                      href="/dashboard/education/create-new-education"
                      className={linkClass("/dashboard/education/create-new-education")}
                    >
                      <FaTextWidth /> Create Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/education/all-education"
                      className={linkClass("/dashboard/education/all-education")}
                    >
                      <FaExpand /> All Education
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Skill */}
              <li className="border-b border-border">
                <span className="px-4 py-2 block text-base text-text">Skill</span>
                <ul className="grid gap-2 py-2">
                  <li>
                    <Link
                      href="/dashboard/skill/create-new-skill"
                      className={linkClass("/dashboard/skill/create-new-skill")}
                    >
                      <FaTextWidth /> Create Skill
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/skill/all-skill"
                      className={linkClass("/dashboard/skill/all-skill")}
                    >
                      <FaExpand /> All Skill
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Review */}
              <li className="border-b border-border">
                <span className="px-4 py-2 block text-base text-text">Review</span>
                <ul className="grid gap-2 py-2">
                  <li>
                    <Link
                      href="/dashboard/review/create-new-review"
                      className={linkClass("/dashboard/review/create-new-review")}
                    >
                      <FaTextWidth /> Create Review
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/review/all-review"
                      className={linkClass("/dashboard/review/all-review")}
                    >
                      <FaExpand /> All Review
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Main content */}
        <div className="pl-[280px] w-full min-h-screen bg-[#303841]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default DashboardMasterLayout;
