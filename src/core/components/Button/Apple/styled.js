import styled from 'styled-components'
import { ReactComponent as ButtonAppleSVG } from 'core/assets/imgs/apple.svg'
import { ReactComponent as ButtonAppleSoonSVG } from 'core/assets/imgs/apple-soon.svg'

const DefaultSVG = styled(ButtonAppleSVG)`
  #Apple-Button {
    g > rect {
      stroke: ${({ theme }) => theme.button.background};
    }

    text {
      fill: ${({ theme }) => theme.button.background};
    }

    #Apple-Logo {
      fill: ${({ theme }) => theme.button.background};
    }
  }
`

const SoonSVG = styled(ButtonAppleSoonSVG)`
  g > rect {
    stroke: ${({ theme }) => theme.button.background};
  }

  text {
    fill: ${({ theme }) => theme.button.background};
  }

  #Apple-Logo {
    fill: ${({ theme }) => theme.button.background};
  }
`

export default {
  DefaultSVG,
  SoonSVG,
}
