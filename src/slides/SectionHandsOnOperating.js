import * as React from 'react'
import MarkdownSection from '../components/MarkdownSection'
import Probabilities from '../assets/probabilities.svg'
import Socks from '../assets/socks.drawio.svg'
import PrivateTor from '../assets/private-tor-network.drawio.svg'

const SectionIntro = () => (
  // language=md
  <MarkdownSection>{`
  ### Tor as a User
  * Censored user, human rights defender, activist persona
     * Tunnel traffic through the network
     * Hosting a Hidden Service
     
  ![](${Socks})
  ---
  ### Tor as a Node Operator
  * Tor Project contributor
   * Guard or Relay node
   * Exit node
   
  ![](${Probabilities}) <!-- .element height="400px" -->

  <aside class="notes">
    <li>consensus weight fraction = 1/consensus weight</li>
  
    <li>unmeasured, remote measurement, ramping up as a guard relay</li>
  </aside>
  ${""
    /*---
    ### Tor Nyx
    
    Nyx can be used to monitor Tor nodes.
    
    ![](https://nyx.torproject.org/images/logo.png)*/
  }
  ---
  ## Hands-on: Private Tor Network for Research
  * Forked [private-tor-network](https://github.com/maxammann/private-tor-network) from antitree
     * Docker tool to setup arbitrary topologies 
     * Choose the version of Tor freely
  
  ---
  ### Setup
  
  \`\`\`console
  root@tor-private:~$ git clone https://github.com/maxammann/private-tor-network
  root@tor-private:~$ docker build -t "antitree/private-tor" .
  Sending build context to Docker daemon  378.9kB
  Step 1/11 : FROM debian:buster
  buster: Pulling from library/debian
  e9afc4f90ab0: Pull complete
  \`\`\`
  \`\`\`console
  root@tor-private:~$ docker-compose up
  Creating private-tor-network_da2_1 ...done
  Creating private-tor-network_da1_1 ... done
  Creating private-tor-network_hiddenservice_1... done
  Creating private-tor-network_da3_1 ... done
  Creating private-tor-network_relay_1_1 ... done
  Creating private-tor-network_exit_1_1 ... done
  Creating private-tor-network_exit_2_1 ... done
  Creating private-tor-network_client_1 ... done
  Creating private-tor-network_relay_2_1 ... done
  Creating private-tor-network_relay_3_1 ... done
  Creating private-tor-network_hs_1_1 ... done
  \`\`\`
  
  ---
  ### Created Topology
  
  ![](${PrivateTor})
  
  ---
  ### Experiments
  
  * Inspect running services:

\`\`\`console
root@tor-private:~$ docker ps
\`\`\`

  * Inspect configuration:
  
\`\`\`console
root@tor-private:~$ docker exec -ti private-tor-network_hs_1_1 cat /etc/tor/torrc /tor/HSfochaikaes/hs/hostname
\`\`\`

  * Test the [hidden service](http://3z4tooerzlcfox7eif6dw6wnajovahdmoyp4tdflrio5g2lo7ibq6rid.onion/wiki/Wikipedia:Hauptseite)
  
\`\`\`console
max@home:~$ ssh -L 9050:localhost:9050 root@159.69.44.82
root@tor-private:~$ curl -s -L --socks5-hostname 127.0.0.1:9050 3z4tooerzlcfox7eif6dw6wnajovahdmoyp4tdflrio5g2lo7ibq6rid.onion > /dev/null && echo "OK"
\`\`\`
  
  `}</MarkdownSection>
)

export default SectionIntro
