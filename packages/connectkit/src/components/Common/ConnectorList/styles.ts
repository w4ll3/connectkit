import styled from './../../../styles/styled';
import { css, keyframes } from 'styled-components';

import { motion } from 'framer-motion';

const Shimmer = keyframes`
  0%{ transform: translate(-100%) rotate(-45deg); }
  100%{ transform: translate(100%) rotate(-80deg); }
`;

export const ConnectorButton = styled(motion.button)``;
export const ConnectorLabel = styled(motion.span)``;
export const ConnectorIcon = styled(motion.div)``;

// This is a bit of a hack to not share styles between mobile and desktop
const styles = {
  desktop: {
    ConnectorButton: css`
      cursor: pointer;
      user-select: none;
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 20px;
      width: 100%;
      height: 64px;
      font-size: 17px;
      font-weight: var(--ck-primary-button-font-weight, 500);
      line-height: 20px;
      text-align: var(--ck-body-button-text-align, left);
      transition: 180ms ease;
      transition-property: background, color, box-shadow, transform;
      will-change: transform, box-shadow, background-color, color;

      --fallback-color: var(--ck-primary-button-color);
      --fallback-background: var(--ck-primary-button-background);
      --fallback-box-shadow: var(--ck-primary-button-box-shadow);
      --fallback-border-radius: var(--ck-primary-button-border-radius);

      --color: var(--ck-primary-button-color, var(--fallback-color));
      --background: var(
        --ck-primary-button-background,
        var(--fallback-background)
      );
      --box-shadow: var(
        --ck-primary-button-box-shadow,
        var(--fallback-box-shadow)
      );
      --border-radius: var(
        --ck-primary-button-border-radius,
        var(--fallback-border-radius)
      );

      --hover-color: var(--ck-primary-button-hover-color, var(--color));
      --hover-background: var(
        --ck-primary-button-hover-background,
        var(--background)
      );
      --hover-box-shadow: var(
        --ck-primary-button-hover-box-shadow,
        var(--box-shadow)
      );
      --hover-border-radius: var(
        --ck-primary-button-hover-border-radius,
        var(--border-radius)
      );

      --active-color: var(--ck-primary-button-active-color, var(--hover-color));
      --active-background: var(
        --ck-primary-button-active-background,
        var(--hover-background)
      );
      --active-box-shadow: var(
        --ck-primary-button-active-box-shadow,
        var(--hover-box-shadow)
      );
      --active-border-radius: var(
        --ck-primary-button-active-border-radius,
        var(--hover-border-radius)
      );

      color: var(--color);
      background: var(--background);
      box-shadow: var(--box-shadow);
      border-radius: var(--border-radius);

      &:disabled {
        transition: 180ms ease;
      }

      --bg: var(--background);
      &:not(:disabled) {
        &:hover {
          color: var(--hover-color);
          background: var(--hover-background);
          box-shadow: var(--hover-box-shadow);
          border-radius: var(--hover-border-radius);
          --bg: var(--hover-background, var(--background));
        }
        &:focus-visible {
          transition-duration: 100ms;
          color: var(--hover-color);
          background: var(--hover-background);
          box-shadow: var(--hover-box-shadow);
          border-radius: var(--hover-border-radius);
          --bg: var(--hover-background, var(--background));
        }
        &:active {
          color: var(--active-color);
          background: var(--active-background);
          box-shadow: var(--active-box-shadow);
          border-radius: var(--active-border-radius);
          --bg: var(--active-background, var(--background));
        }
      }
    `,
    ConnectorLabel: css`
      display: flex;
      align-items: center;
      gap: 9px;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 2px 0;
      padding-right: 38px;
    `,
    ConnectorIcon: css`
      position: absolute;
      right: 20px;
      width: 32px;
      height: 32px;
      overflow: hidden;
      border-radius: 6px;
      svg {
        display: block;
        width: 100%;
        height: 100%;
      }
    `,
  },
  mobile: {
    ConnectorButton: css`
      text-align: center;
      background: none;
    `,
    ConnectorLabel: css`
      color: var(--ck-body-color);
      font-size: 13px;
      line-height: 15px;
      font-weight: 500;
      opacity: 0.75;
    `,
    ConnectorIcon: css`
      z-index: 9;
      position: relative;
      margin: 0 auto 10px;
      border-radius: 16px;
      width: 60px;
      height: 60px;
      overflow: hidden;
      &:before {
        content: '';
        z-index: 2;
        position: absolute;
        inset: 0;
        border-radius: inherit;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
      }
      svg {
        display: block;
        position: relative;
        width: 100%;
        height: auto;
      }
    `,
  },
};

export const ConnectorsContainer = styled.div<{
  $mobile?: boolean;
  $disabled?: boolean;
}>`
  transition: opacity 300ms ease;

  ${(props) =>
    props.$disabled &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `}

  ${(props) =>
    !props.$mobile
      ? css`
          display: flex;
          flex-direction: column;
          gap: 12px;

          ${ConnectorButton} {
            ${styles.desktop.ConnectorButton}
            ${ConnectorLabel} {
              ${styles.desktop.ConnectorLabel}
            }
            ${ConnectorIcon} {
              ${styles.desktop.ConnectorIcon}
            }
          }
        `
      : css`
          display: grid;
          align-items: flex-start;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px 8px;
          ${ConnectorButton} {
            ${styles.mobile.ConnectorButton}
            ${ConnectorLabel} {
              ${styles.mobile.ConnectorLabel}
            }
            ${ConnectorIcon} {
              ${styles.mobile.ConnectorIcon}
            }
          }
        `}
`;

export const RecentlyUsedTag = styled(motion.span)`
  position: relative;
  top: var(--ck-recent-badge-top-offset, 0.5px);
  display: inline-block;
  padding: 10px 7px;
  line-height: 0;
  font-size: 13px;
  font-weight: 400;
  border-radius: var(--ck-recent-badge-border-radius, var(--border-radius));
  color: var(
    --ck-recent-badge-color,
    var(--ck-accent-color, var(--ck-body-color-muted, currentColor))
  );
  background: var(--ck-recent-badge-background, transparent);
  overflow: hidden;
  span {
    display: inline-block;
    position: relative;
  }
  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.4;
    box-shadow: var(--ck-recent-badge-box-shadow, inset 0 0 0 1px currentColor);
    border-radius: inherit;
  }
  &:after {
    z-index: 2;
    content: '';
    position: absolute;
    inset: -10%;
    top: -110%;
    aspect-ratio: 1/1;
    opacity: 0.7;
    background: linear-gradient(
      170deg,
      transparent 10%,
      var(--ck-recent-badge-background, var(--bg)) 50%,
      transparent 90%
    );
    animation: ${Shimmer} 2s linear infinite;
  }
`;

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
export const NoResults = styled.div`
  padding: 20px 0;
  color: var(--ck-body-color-muted);
  font-size: 16px;
  user-select: none;
  pointer-events: none;
  animation: ${FadeIn} 300ms ease forwards;
`;