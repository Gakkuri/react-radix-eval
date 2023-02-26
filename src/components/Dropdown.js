import React, { useState } from 'react'
import * as RDropdown from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon, ChevronRightIcon, CheckIcon } from '@radix-ui/react-icons'


const Dropdown = () => {
    const [showToolbar, setShowToolbar] = useState(true);
    const [showFullURLs, setShowFullURLs] = useState(false);


    return (
        <RDropdown.Root>
            <RDropdown.Trigger asChild>
                <button className="IconButton" aria-label="Options">
                    Options <ChevronDownIcon />
                </button>
            </RDropdown.Trigger>

            <RDropdown.Portal>
                <RDropdown.Content className="DropdownMenuContent" sideOffset={5}>
                    <RDropdown.Item className="DropdownMenuItem">
                        New Tab
                    </RDropdown.Item>
                    <RDropdown.Item className="DropdownMenuItem">
                        New Window
                    </RDropdown.Item>

                    <RDropdown.Separator className="DropdownMenuSeparator" />

                    <RDropdown.Sub>
                        <RDropdown.SubTrigger className="DropdownMenuSubTrigger">
                            Favorites
                            <div className="RightSlot">
                                <ChevronRightIcon />
                            </div>
                        </RDropdown.SubTrigger>
                        <RDropdown.Portal>
                            <RDropdown.SubContent
                                className="DropdownMenuSubContent"
                                sideOffset={2}
                                alignOffset={-5}
                            >
                                <RDropdown.Item className="DropdownMenuItem">Favorite 1</RDropdown.Item>
                                <RDropdown.Item className="DropdownMenuItem">Favorite 2</RDropdown.Item>
                                <RDropdown.Item className="DropdownMenuItem">Favorite 3</RDropdown.Item>
                            </RDropdown.SubContent>
                        </RDropdown.Portal>
                    </RDropdown.Sub>

                    <RDropdown.Separator className="DropdownMenuSeparator" />

                    <RDropdown.CheckboxItem
                        className="DropdownMenuCheckboxItem"
                        checked={showToolbar}
                        onCheckedChange={setShowToolbar}
                    >
                        <RDropdown.ItemIndicator className="DropdownMenuItemIndicator">
                            <CheckIcon />
                        </RDropdown.ItemIndicator>
                        Show Toolbar
                    </RDropdown.CheckboxItem>
                    <RDropdown.CheckboxItem
                        className="DropdownMenuCheckboxItem"
                        checked={showFullURLs}
                        onCheckedChange={setShowFullURLs}
                    >
                        <RDropdown.ItemIndicator className="DropdownMenuItemIndicator">
                            <CheckIcon />
                        </RDropdown.ItemIndicator>
                        Show Full URLs
                    </RDropdown.CheckboxItem>

                </RDropdown.Content>
            </RDropdown.Portal>
        </RDropdown.Root>
    )
}

export default Dropdown