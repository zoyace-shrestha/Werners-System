using System.Threading.Tasks;

public interface IHubClient
{
    Task BroadcastMessage();
    Task BroadcastNotification(int data);
}
