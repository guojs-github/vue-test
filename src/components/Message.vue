<template>
	<div id="message-list">
		<MessageList :messages="messages"/>
	</div>
</template>

<script>
import MessageList from './MessageList'

export default {
	name: 'Message',
	data: () => ({ messages: ['Hey John', 'Howdy Paco'] }),
	components: {
		MessageList
	}
}
</script>