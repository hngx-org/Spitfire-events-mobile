module.exports = {
  name: "spitfire-apk",
  version: "1.0.0",
  extra: {
    clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
  },
  expo: {
    android: {
      package: "com.spitfire.event",
    },
    extra: {
      eas: {
        projectId: "dede9e52-2166-41ef-bf26-6878164946b7",
      },
    },
  },
};