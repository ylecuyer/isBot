describe("Bing", function(){
  var bot;
  var userAgent;

  beforeEach(function() {
    bot    = null;
    userAgent = null;
  });

  describe("Bingbot UserAgent", function() {

    beforeEach(function() {
      userAgent = "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)";
      bot = new isBot.Class(userAgent);
    });

    it("should be Bingbot", function() {
      expect(bot.bingbot).toBe(true);
    });

    it("should be bot", function() {
      expect(bot.bot).toBe(true);
    });

  });
});
