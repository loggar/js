const router = Router();

router.get("/endpoint", (req, res) => {
  let conMobile;
  try {
    //do some db operations
  } catch (e) {
    /*
    if (conMobile) {
      conMobile.release();
     }
     */
    conMobile && conMobile.release();
  }
});
