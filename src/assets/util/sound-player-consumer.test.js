// sound-play-consumer.test.js
import SoundPlayer from './sound-player';
import SoundPlayerConsumer from './sound-player-consumer';
jest.mock('./sound-player'); // SoundPlayer is now a mock constructor

beforeEach(() => {
	// Clear all instances and calls to constructor and all methods: ��Ӧ������ÿ�β���ǰ�����������ʷ
	SoundPlayer.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
	const soundPlayerConsumer = new SoundPlayerConsumer();
	expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
	// Show that mockClear() is working:
	// ����֮ǰ�������ʷ���˴��϶���û�б�����
	expect(SoundPlayer).not.toHaveBeenCalled();

	const soundPlayerConsumer = new SoundPlayerConsumer();
	// Constructor should have been called again:
	// ��������Ӧ���Ѿ������ù���
	expect(SoundPlayer).toHaveBeenCalledTimes(1);

	const coolSoundFileName = 'song.mp3';
	soundPlayerConsumer.playSomethingCool();

	// mock.instances is available with automatic mocks:
	// �Զ���mock����instance��
	const mockSoundPlayerInstance = SoundPlayer.mock.instances[0]; // ��һ��ʵ��
	const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
	expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName); // ��һ�ε��õĵ�һ���������
	// Equivalent to above check:
	expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
	expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});

