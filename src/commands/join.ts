module.exports = {
    name: "join",
    description: "Join VC",
    admin: true,
    execute(client, message, args, commands) {
        const channel = client.channels.cache.get('771294264776327175');
        channel.join();
    }
}