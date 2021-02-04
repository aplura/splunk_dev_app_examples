/*
 tabs.js
 '''
 Written by Aplura, LLC
 Copyright (C) 2016-2021 Aplura, LLC

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
require(['jquery', 'underscore', 'splunkjs/mvc', 'bootstrap.tab', 'splunkjs/mvc/simplexml/ready!'],
    function ($, _, mvc) {

        /**
         * The below defines the tab handling logic.
         */

        // The normal, auto-magical Bootstrap tab processing doesn't work for us since it requires a particular
        // layout of HTML that we cannot use without converting the view entirely to simpleXML. So, we are
        // going to handle it ourselves.
        let hideTabTargets = function () {

            let tabs = $('a[data-elements]');

            // Go through each toggle tab
            for (let c = 0; c < tabs.length; c++) {

                // Hide the targets associated with the tab
                let targets = $(tabs[c]).data("elements").split(",");

                for (let d = 0; d < targets.length; d++) {
                    $('#' + targets[d], this.$el).hide();
                }
            }
        };

        let selectTab = function (e) {

            // Stop if the tabs have no elements
            if ($(e.target).data("elements") === undefined) {
                console.warn("Yikes, the clicked tab has no elements to hide!");
                return;
            }

            // Get the IDs that we should enable for this tab
            let toToggle = $(e.target).data("elements").split(",");

            // Hide the tab content by default
            hideTabTargets();

            // Now show this tabs toggle elements
            for (let c = 0; c < toToggle.length; c++) {
                $('#' + toToggle[c], this.$el).show();
            }

        };

        // Wire up the function to show the appropriate tab
        $('a[data-toggle="tab"]').on('shown', selectTab);

        // Show the first tab
        $('.toggle-tab').first().trigger('shown');

        // Make the tabs into tabs
        $('#tabs', this.$el).tab();

    });