import styled from "styled-components";
import { ReactComponent as ButtonGoogleSVG } from "shared/assets/imgs/google-play.svg";
import { ReactComponent as ButtonGoogleSoonSVG } from "shared/assets/imgs/google-soon.svg";

const DefaultSVG = styled(ButtonGoogleSVG)`
  #Google-Play-Button {
    g > rect {
      stroke: ${({ theme }) => theme.button.background};
    }

    text {
      fill: ${({ theme }) => theme.button.background};
    }

    #Google-Play-Logo {
      fill: ${({ theme }) => theme.button.background};
    }
  }
`;

const SoonSVG = styled(ButtonGoogleSoonSVG)`
  g > rect {
    stroke: ${({ theme }) => theme.button.background};
  }

  text {
    fill: ${({ theme }) => theme.button.background};
  }

  #Google-Play-Logo {
    fill: ${({ theme }) => theme.button.background};
  }
`;

export default {
  DefaultSVG,
  SoonSVG
};
