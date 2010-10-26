/*
Copyright 2010 Alessandro Bahgat Shehata and Daniele Castagna

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

function init() {
    debugMsg(logLevels.info, 'Background page init');

    chrome.extension.onRequest.addListener(function(request, sender) {
        if (request.msg == "bitletIcon") {
            chrome.pageAction.setTitle({
                tabId: sender.tab.id,
                title: "BitLet 4 Chrome - This page contains links to torrents."
            });
            chrome.pageAction.show(sender.tab.id);
        } else if (request.msg == "openPopup") {
			BitLet.openPopupChecked(request.torrentUrl);
		}
    });
}