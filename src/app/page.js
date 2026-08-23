export const revalidate = 0; 
import HomeComponent from "@/components/HomeComponent";
import AboutComponent from "@/components/AboutComponent";
import PortfolioComponent from "@/components/PortfolioComponent";
import ServiceComponent from "@/components/ServiceComponent";
import BlogComponent from "@/components/BlogComponent";
import ContactComponent from "@/components/ContactComponent";
import MasterLayout from "@/layout/MasterLayout";
import { PrismaClient } from "@prisma/client";
import Visitor from "@/childComponents/Visitor";

async function getData() {
  const prisma = new PrismaClient();
  
  // Home Data
  let home_data = await prisma.home_page.findMany();
  let service_data = await prisma.service.findMany();
  let home_component_data = { home_data, service_data };

  // About Data
  let getAbout_page = await prisma.about_page.findMany();
  let experience = await prisma.experience.findMany();
  let education = await prisma.education.findMany();
  let skill = await prisma.skill.findMany();
  let about_component_data = { getAbout_page, experience, education, skill };

  // Portfolio Data
  let portfolio_page_data = await prisma.portfolio_page.findMany();
  let portfolio_data = await prisma.portfolio.findMany();
  let portfolio_component_data = { portfolio_page_data, portfolio_data };

  // Service Data
  let service_page_data = await prisma.service_page.findMany();
  let review_data = await prisma.review.findMany();
  let service_component_data = { service_page_data, service_data, review_data };

  // Blog Data
  let blog_page_data = await prisma.blog_page.findMany();
  let blog_component_data = { blog_page_data };

  // Contact Data
  let contact_page_data = await prisma.contact_page.findMany();
  let contact_component_data = { contact_page_data };

  return {
    home_component_data,
    about_component_data,
    portfolio_component_data,
    service_component_data,
    blog_component_data,
    contact_component_data
  };
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <MasterLayout>
        <HomeComponent data={data.home_component_data} />
        <AboutComponent data={data.about_component_data} />
        <PortfolioComponent data={data.portfolio_component_data} />
        <ServiceComponent data={data.service_component_data} />
        <BlogComponent page="1" data={data.blog_component_data} />
        <ContactComponent data={data.contact_component_data} />
        <Visitor />
      </MasterLayout>
    </main>
  );
}
