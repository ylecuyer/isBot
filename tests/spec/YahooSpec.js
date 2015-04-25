describe("Yahoo", function(){
  var bot;
  var userAgent;

  beforeEach(function() {
    bot    = null;
    userAgent = null;
  });

  describe("Yahoo! Slurp UserAgent", function() {

    beforeEach(function() {
      userAgent = "Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)";
      bot = new isBot.Class(userAgent);
    });

    it("should be Yahoobot", function() {
      expect(bot.yahoobot).toBe(true);
    });

    it("should be bot", function() {
      expect(bot.bot).toBe(true);
    });

  });
});
