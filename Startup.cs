using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PakengTest.Startup))]
namespace PakengTest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
