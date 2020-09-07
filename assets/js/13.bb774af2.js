(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{210:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("Hooks are introduced starting from Imunify360 version 4.2 Beta as a script-based interface for various application events. This is a simple and effective way to automate Imunify360 alerts and event processing.\nFor example, an administrator can have Imunify360 calling his own script when malicious files are detected or misconfigurations are detected and perform a custom processing or specific actions, for example, create a ticket.\nHooks are available only via CLI.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("Start using hooks with three simple steps:")]),e._v(" "),e._m(5),e._v(" "),a("ul",[a("li",[e._v("you can use our "),a("router-link",{attrs:{to:"/hooks/#structure-and-examples-of-a-hook-script"}},[e._v("scripts example")]),e._v(" as a template")],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/hooks/#available-events-and-their-parameters"}},[e._v("the following events are available")])],1)]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),a("p",[e._v("The following CLI command is used to manage hooks:")]),e._v(" "),e._m(20),e._v(" "),a("p",[e._v("The following commands are supported:")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),a("p",[e._v("Native hook is a script written on Python 3.5 and allows to quickly process events. The Python file should contain only one method that customer would implement:")]),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),a("p",[e._v("Once the listener is done, the data is recorded to the log file in the following format:")]),e._v(" "),e._m(30),e._v(" "),a("p",[e._v("In case of an error, you can see the error code you have specified.")]),e._v(" "),e._m(31),e._v(" "),a("p",[e._v("Regular (non-native) hook:")]),e._v(" "),e._m(32),e._v(" "),a("p",[e._v("Native hook:")]),e._v(" "),e._m(33)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"notranslate"},[t("h1",{attrs:{id:"hooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hooks","aria-hidden":"true"}},[this._v("#")]),this._v(" Hooks")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Requirements")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("You can use any programming language to create a hook script")]),this._v(" "),t("li",[this._v("A hook script should be executable")]),this._v(" "),t("li",[this._v("For Native hooks, you should use Python 3.5 only")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-to-start-using-hooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-start-using-hooks","aria-hidden":"true"}},[this._v("#")]),this._v(" How to start using hooks")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Create a script to handle an event (a hook handler):")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("Register your hook handler in Imunify360 agent - use registration command:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"notranslate"},[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("imunify360-agent hook add --event <event name> --path </path/to/hook_script>\n")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"3"}},[t("li",[this._v("Once the event added - check results and the log file (see below)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"available-events-and-their-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#available-events-and-their-parameters","aria-hidden":"true"}},[this._v("#")]),this._v(" Available events and their parameters")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("p",[a("strong",[e._v("agent")])]),e._v(" "),a("ul",[a("li",[e._v("subtype ( started | misconfig )\n"),a("ul",[a("li",[e._v("started - the event is generated each time the Imunify agent is started/restarted\n"),a("ul",[a("li",[e._v("params[]\n"),a("ul",[a("li",[e._v("version / string / version of agent")])])])])]),e._v(" "),a("li",[e._v("misconfig - the event is generated when the agent detects agent misconfiguration / broken settings / etc.\n"),a("ul",[a("li",[e._v("params[]\n"),a("ul",[a("li",[e._v("error / string / error message where / what type of misconfiguration was detected and some details")])])])])])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("malware-scanning")])]),e._v(" "),a("ul",[a("li",[e._v("subtype ( started | finished )\n"),a("ul",[a("li",[e._v("started - the event is generated when the malware scanning process is started (for on-demand and background scans only, yet not the ftp / waf / inotify)\n"),a("ul",[a("li",[e._v("params[]\n"),a("ul",[a("li",[e._v("scan_id / string / identifier of running scan")]),e._v(" "),a("li",[e._v("path / string / path that’s scanning")]),e._v(" "),a("li",[e._v("type / string / type of scanning (“on-demand”, “background”, “ftp”, “rescan“)")]),e._v(" "),a("li",[e._v("scan_params[]  / initial scanning params\n"),a("ul",[a("li",[e._v("file_mask / string / file mask to scan")]),e._v(" "),a("li",[e._v("follow_symlinks / boolean / shall scanner follow symlinks")]),e._v(" "),a("li",[e._v("ignore_mask / string / file mask to ignore")]),e._v(" "),a("li",[e._v("intensity / string / intensity type selected (“low”, “moderate”,  “high”)")])])])])])])])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"notranslate"},[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{\n"scan_id":"dc3c6061c572410a83be19d153809df1",\n"home":"/home/a/abdhf/",\n"user":"abdhf",\n"type":"background",\n"scan_params": {"file_mask":"*", "follow_symlinks":"true", "ignore_mask":"", "intensity":"low"}\n}\n')])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("* finished - the event is generated when the malware scanning process is finished (for on-demand and background scans only, yet not the ftp / waf / inotify)\n  * params[]\n    * scan_id / string / identifier of running scan\n\t* path / string / path that’s scanned\n\t* users[] / string array/ user that’s scanned\n\t* started / int / unixtime when scan started\n\t* total_files / int / total number of files that were scanned\n\t* total_malicious / int / number of detected malicious files\n\t* errors[] / string / error message if any occurred during scanning\n\t* status / string / status of scan (“ok”, “has_errors”, “failed”)\n\t* scan_params[] / initial scanning params\n\t  * file_mask / string / file mask to scan\n\t  * follow_symlinks / boolean / shall scanner follow symlinks\n\t  * ignore_mask / string / file mask to ignore\n\t  * intensity / string / intensity type selected (“low”, “moderate”,  “high”)\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"notranslate"},[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{\n"scan_id":"dc3c6061c572410a83be19d153809df1",\n"home":"/home/a/abdhf/",\n"user":"abdhf",\n"started":1587365282,\n"total_files":873535,\n"total_malicious":345,\n"errors":[],\n"status":"ok",\n"type":"background",\n"scan_params": {"file_mask":"*", "follow_symlinks":"true", "ignore_mask":"", "intensity":"low"}\n}\n')])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("strong",[e._v("malware-detected")]),e._v(" "),a("ul",[a("li",[e._v("subtype ( critical )\n"),a("ul",[a("li",[e._v("critical\n"),a("ul",[a("li",[e._v("params[]\n"),a("ul",[a("li",[e._v("scan_id / string / unique id of the scan")]),e._v(" "),a("li",[e._v("errors[] / string / error strings that happened during the last scan")]),e._v(" "),a("li",[e._v("started / int / unixtime when the scan was started")]),e._v(" "),a("li",[e._v("path / string / path that was scanned")]),e._v(" "),a("li",[e._v("users[] / string array / users that have been scanned (if any)")]),e._v(" "),a("li",[e._v("total_files / int / number of files checked within the last scanning")]),e._v(" "),a("li",[e._v("total_malicious / int / number of detected malicious files")]),e._v(" "),a("li",[e._v("tmp_filename / string / path to a temporary file with a list of detected threads. The list of threads is in the format of the following command: "),a("span",{staticClass:"notranslate"},[a("code",[e._v("imunify360-agent malware malicious list --by-scan-id=... --json")])])])])])])])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"notranslate"},[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{\n\n"scan_id":"dc3c6061c572410a83be19d153809df1",\n"path":"/home/a/abdhf/",\n"username":["imunify"],\n"started":1587365282,\n"total_files":873535,\n"total_malicious":345,\n"errors":[],\n"files":[\n{\n  "username":"imunify",\n  "hash":"17c1dd3659578126a32701bb5eaccecc2a6d8307d8e392f5381b7273bfb8a89d",\n  "size":"182",\n  "cleaned_at":1553762878.6882641,\n  "extra_data":{\n\n\n  },\n  "malicious":true,\n  "id":32,\n  "status":"cleanup_removed",\n  "file":"/home/imunify/public_html/01102018_2.php",\n  "type":"SMW-INJ-04174-bkdr",\n  "scan_type":"on-demand",\n  "Created":1553002672\n},\n{\n  "username":"imunify",\n  "hash":"04425f71ae6c3cd04f8a7f156aee57096dd658ce6321c92619a07e122d33bd32",\n  "size":"12523",\n  "cleaned_at":1553762878.6882641,\n  "extra_data":{\n\n\n  },\n  "malicious":true,\n  "id":33,\n  "status":"cleanup_done",\n  "file":"/home/imunify/public_html/22.js",\n  "type":"SMW-INJ-04346-js.inj",\n  "scan_type":"on-demand",\n  "Created":1553002672\n},\n...\n\n}\n')])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),t("p",[this._v("All results can be saved in a temporary file before handler invocation and then remove the file after the event is being processed")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("strong",[e._v("malware-cleanup")]),e._v(" "),a("ul",[a("li",[e._v("subtype ( started | finished )\n"),a("ul",[a("li",[e._v("started - the event is generated when the malware cleanup process is started (for on-demand and background cleanup only, background auto-cleanup will be implemented later)\n"),a("ul",[a("li",[e._v("params[]\n"),a("ul",[a("li",[e._v("cleanup_id / string / unique id of the cleanup")]),e._v(" "),a("li",[e._v("started / int / unixtime when the cleanup was started")]),e._v(" "),a("li",[e._v("tmp_filename / string / path to a temporary file with a scanning report. The list is in the format of the following command: "),a("span",{staticClass:"notranslate"},[a("code",[e._v("imunify360-agent malware malicious list --by-scan-id=... --json")])]),e._v(" . See malware-detected hook section for details.")]),e._v(" "),a("li",[e._v("total_files / int / number of files that were sent for cleanup")])])])])]),e._v(" "),a("li",[e._v("finished - the event is generated when the malware scanning process is finished (for on-demand and background cleanup only, background auto-cleanup will be implemented later)\n"),a("ul",[a("li",[e._v("params[]\n"),a("ul",[a("li",[e._v("cleanup_id / string / identifier of running cleanup")]),e._v(" "),a("li",[e._v("started / int / unixtime when cleanup started")]),e._v(" "),a("li",[e._v("total_files / int / number of files that were sent for cleanup")]),e._v(" "),a("li",[e._v("total_cleaned / int / number of files that were successfully cleaned")]),e._v(" "),a("li",[e._v("tmp_filename / string / path to a temporary file with a list of results.")]),e._v(" "),a("li",[e._v("errors[] / string / error messages if any occurred during cleanup")]),e._v(" "),a("li",[e._v("errors[] / string / error messages if any occurred during cleanup")])])])])])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"notranslate"},[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{\n"scan_id":"dc3c6061c572410a83be19d153809df1",\n"started":1587365282,\n"total_files":873535,\n"total_cleaned":872835,\n"tmp_filename":”/var/imunify/tmp/hooks/tmp_02q648234692834698456728439587245.json”,\n"errors":[],\n"status":"ok"\n}\n')])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli","aria-hidden":"true"}},[this._v("#")]),this._v(" CLI")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"notranslate"},[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("imunify360-agent hook [command] --event [event_name|all] [--path </path/to/hook_script>]\n")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("span",{staticClass:"notranslate"},[a("strong",[e._v("add")])]),e._v(" - register a new event handler")]),e._v(" "),a("li",[a("span",{staticClass:"notranslate"},[a("strong",[e._v("delete")])]),e._v(" - unregister existing event handler")]),e._v(" "),a("li",[a("span",{staticClass:"notranslate"},[a("strong",[e._v("list")])]),e._v(" - show existing event handlers")]),e._v(" "),a("li",[a("span",{staticClass:"notranslate"},[a("strong",[e._v("add-native")])]),e._v(" - register a new native event handler")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The third parameter "),a("span",{staticClass:"notranslate"},[a("em",[e._v("event_name")])]),e._v(" defines a particular event that invokes a registered handler as opposed to "),a("span",{staticClass:"notranslate"},[a("strong",[e._v("all")])]),e._v(" keyword."),a("br"),e._v("\nThe fourth parameter "),a("code",[e._v("/path/to/hook_script")]),e._v(" shall contain a valid path to a handler of the event, it shall be any executable or Python Native event handlers that agent will run upon a registered event.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Native")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"notranslate"},[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("def im_hook(dict_param):\n\t….\n\tpass\n")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("where "),t("code",[this._v("dict_param")]),this._v(" would hold the same data as JSON that non-Native hook will gate.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Log File")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can see all hook data in the log file. It is located at "),t("span",{staticClass:"notranslate"},[t("em",[this._v("/var/log/imunify360/hook.log")])]),this._v(" .\nWhen the event comes, the data is recorded to the log file in the following format:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"notranslate"},[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("timestamp event : id : started [native:] name :  subtype : script_path\n")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("span",{staticClass:"notranslate"},[t("strong",[this._v("native")])]),this._v(" is prepended for the Native hook implementation")]),this._v(" "),t("li",[t("span",{staticClass:"notranslate"},[t("strong",[this._v("id")])]),this._v(" is a unique ID for each event")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"notranslate"},[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("timestamp event : id : done [native:] script_path [OK|ERROR:code]\n")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"structure-and-examples-of-a-hook-script"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#structure-and-examples-of-a-hook-script","aria-hidden":"true"}},[this._v("#")]),this._v(" Structure and examples of a hook script")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"notranslate"},[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("#!/bin/bash\n\ndata=$(cat)\n\nevent=$(jq -r '.event' <<< ${data})\nsubtype=$(jq -r '.subtype' <<< ${data})\n\ncase ${event} in\n    malware-scanning)\n        case ${subtype} in\n            started)\n                # do stuff here\n            ;;\n            *)\n                echo \"Unhandled subtype: ${subtype}\" 1>&2\n                exit 1\n        esac\n        ;;\n    *)\n        echo \"Unhandled event: ${event}/${subtype}\" 1>&2\n        exit 2\nesac\n")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"notranslate"},[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("def im_hook(dict_param):\n   event = dict_param['event']\n   subtype = dict_param['subtype']\n\n   if event == 'malware-scanning':\n       if subtype == 'started':\n           # do stuff here\n           pass\n       elif subtype == 'finished':\n           # do other stuff here\n           pass\n       else:\n           raise Exception('Unhandled subtype {}'.format(subtype))\n   else:\n       raise Exception('Unhandled event {}'.format(event))\n")])])])])}],!1,null,null,null);t.default=s.exports}}]);