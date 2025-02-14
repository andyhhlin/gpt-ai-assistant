import { t } from '../languages/index.js';

export const COMMAND_CHAT = Object.freeze({
  label: t('__COMMAND_CHAT_LABEL'),
  text: t('__COMMAND_CHAT_TEXT'),
  reply: '',
  aliases: [
    'AI',
    '/ai',
    '/chat',
  ],
});

export const COMMAND_DRAW = Object.freeze({
  label: t('__COMMAND_DRAW_LABEL'),
  text: t('__COMMAND_DRAW_TEXT'),
  reply: '',
  aliases: [
    '/draw',
  ],
});

export const COMMAND_CONTINUE = Object.freeze({
  label: t('__COMMAND_CONTINUE_LABEL'),
  text: t('__COMMAND_CONTINUE_TEXT'),
  reply: '',
  aliases: [
    '/continue',
  ],
});

export const COMMAND_COMMAND = Object.freeze({
  label: t('__COMMAND_COMMAND_LABEL'),
  text: t('__COMMAND_COMMAND_TEXT'),
  reply: '',
  aliases: [
    '/command',
  ],
});

export const COMMAND_DOC = Object.freeze({
  label: t('__COMMAND_DOC_LABEL'),
  text: t('__COMMAND_DOC_TEXT'),
  reply: '',
  aliases: [
    '/doc',
  ],
});

export const COMMAND_VERSION = Object.freeze({
  label: t('__COMMAND_VERSION_LABEL'),
  text: t('__COMMAND_VERSION_TEXT'),
  reply: '',
  aliases: [
    '/version',
  ],
});

export const COMMAND_ACTIVATE = Object.freeze({
  label: t('__COMMAND_ACTIVATE_LABEL'),
  text: t('__COMMAND_ACTIVATE_TEXT'),
  reply: t('__COMMAND_ACTIVATE_REPLY'),
  aliases: [
    '/activate',
  ],
});

export const COMMAND_DEACTIVATE = Object.freeze({
  label: t('__COMMAND_DEACTIVATE_LABEL'),
  text: t('__COMMAND_DEACTIVATE_TEXT'),
  reply: t('__COMMAND_DEACTIVATE_REPLY'),
  aliases: [
    '/deactivate',
  ],
});

export const COMMAND_DEPLOY = Object.freeze({
  label: t('__COMMAND_RESTART_LABEL'),
  text: t('__COMMAND_RESTART_TEXT'),
  reply: t('__COMMAND_RESTART_REPLY'),
  aliases: [
    '/restart',
  ],
});

export const COMMAND_CONFIGURE = Object.freeze({
  label: t('__COMMAND_CONFIGURE_LABEL'),
  text: t('__COMMAND_CONFIGURE_TEXT'),
  reply: t('__COMMAND_CONFIGURE_REPLY'),
  aliases: [
    '/configure',
  ],
});
