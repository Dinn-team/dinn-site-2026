import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'sutrqo3v',
    dataset: 'production'
  },
  // Studio hospedado pela Sanity (sanity.io/@ozWZD2KbF/studio/<appId>).
  // Com o appId, `sanity deploy` atualiza este Studio em vez de criar outro.
  deployment: {
    appId: 'gi77leljw1bttdi1k5opddsj'
  }
});
