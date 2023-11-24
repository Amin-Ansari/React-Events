//Components and other pages
import ResponsiveContainer from "../components/UI/ResponsiveContainer";
import NewsLetterForm from "../components/Structure/Forms/NewsletterForm";

const NewsletterPage = () => {
  return (
    <>
      <ResponsiveContainer>
        <h2 className="news-letter-title">
          Enter your email and sign up for our newsletter
        </h2>
        <NewsLetterForm method={"post"} />
      </ResponsiveContainer>
    </>
  );
};

export default NewsletterPage;

export const newsletterAction = async ({ request, params }) => {
  const formData = await request.formData();
  const newsLetterInput = formData.get("newsletter-email");

  return newsLetterInput;
};
