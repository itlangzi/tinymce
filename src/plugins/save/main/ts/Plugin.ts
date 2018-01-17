/**
 * Plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import PluginManager from 'tinymce/core/PluginManager';
import Commands from './api/Commands';
import Buttons from './ui/Buttons';

PluginManager.add('save', function (editor) {
  Buttons.register(editor);
  Commands.register(editor);
});

export default function () { }