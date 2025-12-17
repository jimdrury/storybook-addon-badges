import React, { FC } from "react";
import { styled } from "@storybook/theming";

import { BadgeTooltipWrapper } from "./badge-tooltip-wrapper.component";
import type { BadgeConfig } from "../typings.interface";

export interface StyledBadgeProps {
  config: BadgeConfig;
}

export const StyledBadge = styled.span<StyledBadgeProps>(
  ({ config: { styles } }) => ({
    borderColor: styles?.borderColor || "#474D66",
    borderRadius: styles?.borderRadius || "3px",
    borderStyle: styles?.borderStyle || "solid",
    borderWidth: styles?.borderWidth || "1px",
    color: styles?.color || "#474D66",
    backgroundColor: styles?.backgroundColor || "#EDEFF5",
    fontSize: styles?.fontSize || "0.625rem",
    fontFamily: styles?.fontFamily || "inherit",
    fontWeight: styles?.fontWeight || "bold",
    lineHeight: styles?.lineHeight || "1",
    textTransform: styles?.textTransform || "uppercase",
    paddingInline: styles?.paddingInline || "5px",
    paddingBlock: styles?.paddingBlock || "2px",
    whiteSpace: styles?.whiteSpace || "nowrap",
    overflow: styles?.overflow || "hidden",
    textOverflow: styles?.textOverflow || "ellipsis",
    display: "block",
  }),
);

export interface BadgeProps {
  config: BadgeConfig;
}

export const Badge: FC<BadgeProps> = ({ config }) => {
  if (config.tooltip) {
    return (
      <BadgeTooltipWrapper tooltip={config.tooltip}>
        <StyledBadge config={config}>{config.title}</StyledBadge>
      </BadgeTooltipWrapper>
    );
  }

  return <StyledBadge config={config}>{config.title}</StyledBadge>;
};
