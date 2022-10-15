import Layout from "../components/Layout";
import Link from "next/link";
import Contact from "../components/Contact";

const ContactForm:React.FC = () => {
  return (
    <Layout title="Contact-Form">
      <div className="text-center bg-gray-900 shadow-xl rounded-xl mt-32 mb-16 md:max-w-2xl mx-auto container max-w-md">
      <Contact />
      <div className="flex justify-center">
          <Link href="/">
            <div className="flex cursor-pointer my-6 hover:text-gray-300">
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
              <span>Back to main page</span>
            </div>
          </Link>
        </div>
        </div>
    </Layout>
  );
}
export default ContactForm;