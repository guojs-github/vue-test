// sound-play-consumer.test.js
import SoundPlayer from './sound-player';
import SoundPlayerConsumer from './sound-player-consumer';
jest.mock('./sound-player'); // SoundPlayer is now a mock constructor

beforeEach(() => {
	// Clear all instances and calls to constructor and all methods: 这应该是在每次测试前，清除调用历史
	SoundPlayer.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
	const soundPlayerConsumer = new SoundPlayerConsumer();
	expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
	// Show that mockClear() is working:
	// 由于之前清除了历史，此处肯定还没有被调用
	expect(SoundPlayer).not.toHaveBeenCalled();

	const soundPlayerConsumer = new SoundPlayerConsumer();
	// Constructor should have been called again:
	// 构建函数应该已经被调用过了
	expect(SoundPlayer).toHaveBeenCalledTimes(1);

	const coolSoundFileName = 'song.mp3';
	soundPlayerConsumer.playSomethingCool();

	// mock.instances is available with automatic mocks:
	// 自动的mock才有instance？
	const mockSoundPlayerInstance = SoundPlayer.mock.instances[0]; // 第一个实例
	const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
	expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName); // 第一次调用的第一个参数检查
	// Equivalent to above check:
	expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
	expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});

