import { SETTING_AI_ACTIVATED } from '../constants/setting.js';
import storage from '../storage/index.js';
import { replyMessage } from '../utils/index.js';
import {
  execActivateCommand,
  execChatCommand,
  execCommandCommand,
  execConfigureCommand,
  execDeactivateCommand,
  execDeployCommand,
  execDocCommand,
  execDrawCommand,
  execVersionCommand,
  isActivateCommand,
  isChatCommand,
  isCommand,
  isConfigureCommand,
  isContinue,
  isDeactivateCommand,
  isDeployCommand,
  isDocCommand,
  isDrawCommand,
  isVersionCommand,
} from './commands/index.js';
import Context from './context.js';
import Event from './event.js';

/**
 * @param {Context} context
 * @returns {Context}
 */
const handle = async (context) => (
  (isCommand(context) && execCommandCommand(context))
    || (isDocCommand(context) && execDocCommand(context))
    || (isVersionCommand(context) && execVersionCommand(context))
    || (isDeployCommand(context) && execDeployCommand(context))
    || (isConfigureCommand(context) && execConfigureCommand(context))
    || (isDrawCommand(context) && execDrawCommand(context))
    || (isActivateCommand(context) && execActivateCommand(context))
    || (isDeactivateCommand(context) && execDeactivateCommand(context))
    || (isContinue(context) && execChatCommand(context))
    || (isChatCommand(context) && execChatCommand(context))
    || ((await storage.getItem(SETTING_AI_ACTIVATED) && execChatCommand(context)))
    || context
);

const handleEvents = async (events = []) => (
  Promise.all(
    (await Promise.all(
      events
        .map((event) => new Event(event))
        .filter((event) => event.isMessage)
        .map((event) => new Context(event))
        .map((context) => handle(context)),
    ))
      .filter((context) => context.messages.length > 0)
      .map((context) => replyMessage(context)),
  )
);

export default handleEvents;
