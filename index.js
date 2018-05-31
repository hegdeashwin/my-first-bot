module.exports = (robot) => {
  robot.on('issues.opened', async context => {
    const params = context.issue({
      body: "Thank you for logging this information, we'll review it and get back to you soon" 
    });

    return context.github.issues.createComment(params);
  });
}
