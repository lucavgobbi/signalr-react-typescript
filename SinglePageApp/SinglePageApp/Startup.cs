using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SinglePageApp.Startup))]
namespace SinglePageApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            app.MapSignalR();
        }
    }
}
