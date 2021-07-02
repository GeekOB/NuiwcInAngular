topAppBarBuilder.actionItems = [
  {
    id: "calendar",
    icon: "calendar",
  },
  {
    id: "filter",
    icon: "filter",
  },
  {
    id: "search",
    icon: "search",
  },
  {
    id: "notifications",
    icon: "alert",
  },
  {
    id: "settings",
    icon: "settings",
  },
  {
    id: "help",
    icon: "help-outline",
  },
  {
    id: "appSwitcher",
    icon: "app-switcher",
  },
  {
    id: "userAvatar",
    icon: "user",
    menuGroups: [
      {
        type: "navigation",
        legend: "jan.rytir@solarwinds.com",
        items: [
          {
            url: "/profile",
            label: "Profile",
          },
          {
            url: "/preferences",
            label: "Preferences",
            customData: "data that TypeScript wouldn't allow",
          },
        ],
      },
      {
        type: "navigation",
        legend: "SolarWinds7 (AppOptics staging)",
        items: [
          {
            url: "/account-overview",
            label: "Account Overview",
          },
          {
            url: "/subscription",
            label: "Subscription",
          },
        ],
      },
      {
        groupId: "organization",
        legend: "My Organizations",
        type: "selection",
        items: [
          {
            value: "solarwinds7",
            label: "solarwinds7",
            selected: true,
          },
          {
            value: "solarwinds8",
            label: "solarwinds8",
            selected: false,
          },
        ],
      },
      {
        groupId: "another",
        legend: "Another selectable group",
        type: "selection",
        items: [
          {
            value: "item1",
            label: "Selectable item 1",
          },
          {
            value: "item2",
            label: "Selectable item 2",
          },
          {
            value: "item3",
            label: "Disabled selectable item 3",
            disabled: true,
          },
        ],
      },
      {
        items: [
          {
            url: "/logout",
            label: "Log Out",
          },
        ],
      },
    ],
  },
];
topAppBarBuilder.addEventListener("nuiwc-top-app-bar-click", ev => {
  console.log(ev);
  alert(
    `You clicked action item "${ev.detail.actionItem}" from the top bar.` +
    "\nThere is no menu associated with it, that's why a TopAppBarClick event was dispatched."
  );
});
topAppBarBuilder.addEventListener("nuiwc-activate-url", ev => {
  console.log(ev);
  alert(
    `You clicked menu item with associated URL "${ev.detail.url}".` +
    '\nIt belongs to a menu group which is of type "navigation", that\'s why an ActivateUrl event was dispatched.' +
    (ev.detail.customData
      ? `${"\n"}It even contains "${ev.detail.customData}".`
      : "")
  );
});
topAppBarBuilder.addEventListener("nuiwc-menu-select", ev => {
  console.log(ev);
  alert(
    `You clicked menu item "${ev.detail.value}".${"\n"}` +
    `It belongs to a menu group "${ev.detail.groupId}" which is of type "selection", that's why a MenuSelect event was dispatched.`
  );
});

leftNavBuilder.addEventListener("menu-click", function (e) {
  console.log(e);
  alert("you clicked " + e.detail.context.label);
});
leftNavBuilder.input = [
  {
    label: "home",
    url: "/",
    icon: "home",
  },
  {
    label: "PerStack",
    url: "/classic/perfstack",
    icon: "chart-line",
  },
  {
    label: "PerStack",
    url: "/classic/perfstack",
    icon: "chart-line",
  },
  {
    label: "PerStack",
    url: "/classic/perfstack",
    icon: "chart-line",
  },
  {
    label: "PerStack",
    url: "/classic/perfstack",
    icon: "chart-line",
  },
  {
    label: "Something with long label and children",
    icon: "home",
    children: [
      {
        label: "veeeeeeeeeeeeeeery long foo",
        url: "/blah1",
      },
      {
        label: "foo2",
        url: "/blah2",
      },
    ],
  },
  {
    label: "Settings",
    url: "/settings",
    icon: "settings",
  },
];
