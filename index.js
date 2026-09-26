const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

// ================== ĐIỀN TOKEN MỚI VÀO ĐÂY ==================
const TOKEN = ''; 
const APPLICATION_ID = '1538845945700032582'; // App ID của mày
// ===========================================================

// Chống crash khi mất mạng
process.on('unhandledRejection', (reason, promise) => {
    console.error('[CẢNH BÁO] Lỗi chưa xử lý:', reason);
});

// Cơ chế chống ngủ (Giữ cho Railway luôn thức)
setInterval(() => {
    console.log('[KEEP-ALIVE] Bot vẫn đang chạy...');
}, 4 * 60 * 1000); // 4 phút gửi 1 lần

client.on('ready', () => {
    console.log(`✅ THÀNH CÔNG: Đang treo trạng thái cho: ${client.user.tag}`);

    const rpc = new RichPresence(client)
        .setApplicationId(APPLICATION_ID)
        .setType('PLAYING')
        .setName('Broke heart 💔')
        .setDetails('Vietnamese')
        .setState('🫵😎')
        .setStartTimestamp(Date.now())
        .setAssetsLargeImage('logo_lon') // Tên ảnh to
        .setAssetsLargeText('Watching at')
        .setAssetsSmallImage('logo_nho') // Tên ảnh nhỏ
        .setAssetsSmallText('Verified')
        .addButton('CHIM M BÉ HƠN BỐ', 'https://github.com/')
        .addButton('I BROKE 💔', 'https://giphy.com/gifs/BpnkuY1i2rBpm');

    client.user.setActivity(rpc);
});

client.on('error', (err) => {
    console.error('❌ LỖI TOKEN HOẶC KẾT NỐI:', err.message);
});

client.login(TOKEN).catch(err => {
    console.error('❌ SAI TOKEN RỒI MÀY ƠI:', err.message);
});
