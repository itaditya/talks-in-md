const showStoriesFeature = featureFlags.isEnabled('stories');

// API Code
function Server() {
  app.get('/getStories', (req, res) => {
    if (!showStoriesFeature) {
      res.send({
        statusCode: 404,
        message: 'Stories is not available on your account',
      });
    }
  });
}

// React code
function App() {
  return (
    <div>
      {showStoriesFeature && <Stories />}
      <OriginalFeatures />
    </div>
  );
}
