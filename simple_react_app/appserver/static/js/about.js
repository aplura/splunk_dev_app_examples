/*
 about.js
 '''
 Written by Kyle Smith for Aplura, LLC
 Copyright (C) 2016 Aplura, ,LLC

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 '''
 */
require(['jquery', 'underscore', 'splunkjs/mvc', "splunkjs/mvc/utils"],
    function ($, _, mvc, utils) {
        require(["/static/app/simple_react_app/js/node_modules/markdown/lib/markdown.js"], function (md) {
            if (typeof(markdown) != "undefined") {
                $.get("/static/app/simple_react_app/html/README.md", {"ts": $.now()}, function (data) {
                    let _build_links = function (ele) {
                        for (let k = 0; k < ele.length; k++) {
                            let el = ele[k];
                            let linkage = $(el + ":contains('::')");
                            for (let i = 0; i < linkage.length; i++) {
                                let elem = $(linkage[i]), txt = elem.text().replace(/::(.*?)::/g, function (s, match) {
                                    return "<a name=\"" + match + "\"></a>";
                                });
                                elem.text("");
                                elem.append(txt);
                            }
                        }
                    };
                    $(".markdown_container").append(markdown.toHTML(data, 'Maruku'));
                    _build_links(["h1", "h2", "h3", "h4", "h5", "h6"]);
                });
            }
        });
    }
);