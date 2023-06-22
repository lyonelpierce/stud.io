/**
 * Tagify
 */

"use strict";

(function () {
    // Users List suggestion
    //------------------------------------------------------
    const TagifyUserListEl = document.querySelector("#TagifyUserList");

    function tagTemplate(tagData) {
        return `
    <tag title="${tagData.title || tagData.email}"
      contenteditable='false'
      spellcheck='false'
      tabIndex="-1"
      class="${this.settings.classNames.tag} ${
            tagData.class ? tagData.class : ""
        }"
      ${this.getAttributes(tagData)}
    >
      <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
      <div>
        <div class='tagify__tag__avatar-wrap'>
          <img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
        </div>
        <span class='tagify__tag-text'>${tagData.name}</span>
      </div>
    </tag>
  `;
    }

    function suggestionItemTemplate(tagData) {
        return `
    <div ${this.getAttributes(tagData)}
      class='tagify__dropdown__item align-items-center ${
          tagData.class ? tagData.class : ""
      }'
      tabindex="0"
      role="option"
    >
      ${
          tagData.avatar
              ? `<div class='tagify__dropdown__item__avatar-wrap'>
          <img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
        </div>`
              : ""
      }
      <strong>${tagData.name}</strong>
      <span>${tagData.email}</span>
    </div>
  `;
    }

    // initialize Tagify on the above input node reference
    let TagifyUserList = new Tagify(TagifyUserListEl, {
        tagTextProp: "name",
        enforceWhitelist: true,
        skipInvalid: true,
        dropdown: {
            closeOnSelect: false,
            enabled: 0,
            classname: "users-list",
            searchKeys: ["name", "email"],
        },
        templates: {
            tag: tagTemplate,
            dropdownItem: suggestionItemTemplate,
        },
        whitelist: [], // Initialize with an empty whitelist
    });

    fetch("/vendor/studioList") // Replace with your actual backend endpoint
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Update the whitelist with the received data
            TagifyUserList.settings.whitelist = data;

            // Render the suggestions and tags
            TagifyUserList.dropdown.show.call(TagifyUserList, "");
            TagifyUserList.DOM.input.dispatchEvent(new Event("input"));
        })
        .catch((error) => {
            console.error("Error fetching user list:", error);
        });

    TagifyUserList.on("dropdown:show dropdown:updated", onDropdownShow);
    TagifyUserList.on("dropdown:select", onSelectSuggestion);

    let addAllSuggestionsEl;

    function onDropdownShow(e) {
        let dropdownContentEl = e.detail.tagify.DOM.dropdown.content;

        if (TagifyUserList.suggestedListItems.length > 1) {
            addAllSuggestionsEl = getAddAllSuggestionsEl();

            // insert "addAllSuggestionsEl" as the first element in the suggestions list
            dropdownContentEl.insertBefore(
                addAllSuggestionsEl,
                dropdownContentEl.firstChild
            );
        }
    }

    function onSelectSuggestion(e) {
        if (e.detail.elm == addAllSuggestionsEl)
            TagifyUserList.dropdown.selectAll.call(TagifyUserList);
    }

    // create an "add all" custom suggestion element every time the dropdown changes
    function getAddAllSuggestionsEl() {
        // suggestions items should be based on "dropdownItem" template
        return TagifyUserList.parseTemplate("dropdownItem", [
            {
                class: "addAll",
                name: "Add all",
                email:
                    TagifyUserList.settings.whitelist.reduce(function (
                        remainingSuggestions,
                        item
                    ) {
                        return TagifyUserList.isTagDuplicate(item.value)
                            ? remainingSuggestions
                            : remainingSuggestions + 1;
                    },
                    0) + " Members",
            },
        ]);
    }
})();
