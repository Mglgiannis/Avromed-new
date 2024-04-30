import PropTypes from 'prop-types'; // Ensure PropTypes is imported
import MarketingPostView from 'src/sections/_marketing/view/marketing-post-view';
// ----------------------------------------------------------------------

export const metadata = {
  title: 'Marketing: Blog Post',
};

export default function MarketingPostPage({ params }) {
  return <MarketingPostView index={params.id} />;
}

// Define prop types for MarketingPostPage
MarketingPostPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};
