const isAuthenticatedGuard = async (to, from, next) => {
  // console.log({ to, from, next });
  return new Promise(() => {
    const random = Math.random() * 100;

    if (random > 50) {
      console.log("AuthenticatedGuard approve");
      next();
    } else {
      console.log(random, "blocked by the isAuthenticatedGuard");
      next({ name: "pokemon-home" });
    }
  });
};

export default isAuthenticatedGuard;
