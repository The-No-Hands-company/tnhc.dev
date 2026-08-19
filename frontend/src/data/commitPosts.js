// Generated from the Nexus-Systems commit history — do not hand-edit.
//
// Regenerate with scripts/build-changelog.sh
//
// Every commit whose message actually explains something becomes a post.
// The changelog answers 'what changed'; these answer 'why', and the
// reasoning already exists in the commit rather than being written twice.
//
// 240 posts, newest first.

export const COMMIT_POSTS = [
  {
    "slug": "send-attachments-and-reply-from-the-reader",
    "title": "Send attachments, and reply from the reader",
    "date": "2026-08-18",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "mail"
    ],
    "category": "Commit",
    "excerpt": "Closes the asymmetry the last commit exposed: attachments could be read but not sent, and a message could be opened but not answered. Both are table stakes for something people are asked to use as their mail client.",
    "sha": "64d0427",
    "content": [
      {
        "type": "p",
        "text": "Closes the asymmetry the last commit exposed: attachments could be read but not sent, and a message could be opened but not answered. Both are table stakes for something people are asked to use as their mail client."
      },
      {
        "type": "p",
        "text": "Attachments go up base64-encoded because a JSON body cannot carry raw bytes. The size cap is applied to the *decoded* length and matches the SMTP daemon's message limit, so the composer refuses what the sending path would refuse anyway \u2014 accepting it here and failing later loses a message someone spent time writing. Filenames are stripped of quotes, backslashes and newlines before they reach a MIME header, since a filename that breaks the header structure breaks the whole message."
      },
      {
        "type": "p",
        "text": "Reply prefills through the URL rather than router state, so a half-written reply survives a reload and can be linked to. It carries In-Reply-To, which is what puts the answer in its parent's thread \u2014 the threading built in the last commit only pays off if replies actually reference what they answer."
      },
      {
        "type": "p",
        "text": "Verified live: a message sent with a CSV attachment, read back with the attachment listed, downloaded byte-identical; and a malformed base64 payload refused with a reason rather than a 500."
      },
      {
        "type": "p",
        "text": "93 frontend tests, 170 email tests. Clippy clean."
      }
    ]
  },
  {
    "slug": "conversations-attachment-downloads-and-safe-html",
    "title": "Conversations, attachment downloads, and safe HTML",
    "date": "2026-08-18",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "feat",
      "mail"
    ],
    "category": "Commit",
    "excerpt": "The three gaps between the webmail and something worth calling a mail client.",
    "sha": "224c26d",
    "content": [
      {
        "type": "p",
        "text": "The three gaps between the webmail and something worth calling a mail client."
      },
      {
        "type": "p",
        "text": "**HTML is the one where being wrong is account takeover**, not a broken layout: the webmail runs on the origin holding the session cookie, so script execution there is a compromised account. Two independent layers, because sanitisers have been defeated before:"
      },
      {
        "type": "p",
        "text": "1. Sanitised server-side with `ammonia`. Writing an HTML sanitiser by hand is the same category of mistake as writing a TLS stack \u2014 the surface is enormous, the edge cases adversarial, and \"looks fine to me\" is not a standard. We own protocol decisions; we do not own parsing hostile markup. 2. Rendered in a sandboxed iframe with no script permission and its own CSP."
      },
      {
        "type": "p",
        "text": "Eleven tests cover the vectors that matter: script tags, event handlers (onerror/onload/onclick \u2014 no <script> anywhere and it still runs), javascript: and data: URLs, iframes, objects, and forms, which are credential harvesters rendered inside the user's own client. Verified live: a message sent with <script>alert(1)</script> comes back to the reader as clean markup."
      },
      {
        "type": "p",
        "text": "**Remote images are blocked by default, and that is privacy rather than security.** A tracking pixel tells the sender when a message was opened, from what IP, on what client. Loading them silently is the most common way mail clients leak their users, and a privacy-first product cannot do it by default. The reader is told content was withheld and can load it deliberately."
      },
      {
        "type": "p",
        "text": "**Attachments download, never render.** Attachment bytes are chosen entirely by the sender, so an HTML or SVG attachment served inline would execute script on this origin. Always application/octet-stream regardless of the sender's claimed type, always Content-Disposition: attachment, plus nosniff so the browser does not guess a better type, plus a CSP sandbox for anything that renders anyway. Fetched by MIME index, not filename: filenames are sender-chosen and neither unique nor safe as identifiers, and the one used for the download name is stripped of anything that could escape a directory."
      },
      {
        "type": "p",
        "text": "The dashboard proxy had to stop assuming JSON \u2014 passing attachment bytes through as text would corrupt every binary file, and dropping those headers would undo the inline protection."
      },
      {
        "type": "p",
        "text": "**Conversations group in the list**, showing the newest message with a count. A thread counts as unread when *any* message in it is unread; going by the newest alone would hide an older one nobody has read. Messages with no thread id stay separate rather than collapsing into one bogus conversation. Grouping is client-side because the list is already scoped to one folder and mailbox \u2014 if a mailbox outgrows a page, this is the piece to move server-side."
      },
      {
        "type": "p",
        "text": "The thread endpoint is scoped by mailbox membership like every other read: a conversation can contain messages delivered to several people, and only the ones in the caller's own mailbox are theirs to see."
      },
      {
        "type": "p",
        "text": "Verified live end to end: an attachment delivered over SMTP, listed by the reader, and downloaded with the right headers and byte-identical content."
      },
      {
        "type": "p",
        "text": "170 email tests, 93 frontend, 49 dashboard server. Clippy clean."
      }
    ]
  },
  {
    "slug": "imap4rev1-so-ordinary-mail-clients-can-use-a-nexus-mailbox",
    "title": "IMAP4rev1, so ordinary mail clients can use a Nexus mailbox",
    "date": "2026-08-18",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "email"
    ],
    "category": "Commit",
    "excerpt": "Step 7, the last of the plan. Verified against the running daemon with real credentials: CAPABILITY, LOGIN against Auth, LIST returning the special-use folders, SELECT reporting EXISTS/UIDVALIDITY/UIDNEXT, UID FETCH retu",
    "sha": "057f467",
    "content": [
      {
        "type": "p",
        "text": "Step 7, the last of the plan. Verified against the running daemon with real credentials: CAPABILITY, LOGIN against Auth, LIST returning the special-use folders, SELECT reporting EXISTS/UIDVALIDITY/UIDNEXT, UID FETCH returning real messages with flags and bodies, UID SEARCH and UID STORE."
      },
      {
        "type": "p",
        "text": "**UIDs had to be added to the schema, and they are the part that must be right.** A UID is unique within a mailbox and never reused even after deletion, and they ascend in arrival order; if either guarantee breaks, the server must change UIDVALIDITY to tell clients their cache is worthless. Both invariants are enforced in the schema, because breaking them does not fail loudly \u2014 it silently shows people the wrong mail, out of a cache, days later."
      },
      {
        "type": "p",
        "text": "Assignment claims the next UID under a row lock in the same transaction as the insert. Two concurrent deliveries reading uid_next before either wrote would hand out the same UID twice. The UID is spent even when the insert is a no-op, because rolling it back would let a later message reuse it."
      },
      {
        "type": "p",
        "text": "**A bug found by using it rather than by testing it.** `UID FETCH 1:* (FLAGS RFC822.SIZE)` returned every message body in full: the check for \"does this FETCH want bodies\" matched the substring RFC822, and RFC822.SIZE contains it. BODYSTRUCTURE would have matched BODY the same way. That is the exact request a client sends to *avoid* downloading a mailbox, turned into the worst case. Now matched as whole items, with tests for both directions."
      },
      {
        "type": "p",
        "text": "Same shape as the SMTP crate: the session is a pure state machine holding no database handle. When it needs data it returns a Request the server fulfils, which keeps the access-control decisions testable without a socket \u2014 and those get the most attention, because a server that answers before authentication discloses which mailboxes and messages exist to anyone who connects."
      },
      {
        "type": "p",
        "text": "Credentials are checked against Auth rather than stored here; a second copy of a credential check is a second place for it to be subtly wrong. An unknown user and a wrong password give byte-identical replies, or the server becomes an account enumeration oracle. Correct credentials with no mailbox says so distinctly, which saves someone a long argument with their client."
      },
      {
        "type": "p",
        "text": "Plaintext on loopback, stated plainly in the README: there is no TLS here, so exposure beyond localhost needs a terminator in front."
      },
      {
        "type": "p",
        "text": "16 tests in this crate, 159 across the workspace. Clippy clean. All six public hosts unchanged."
      }
    ]
  },
  {
    "slug": "the-smtp-daemon-and-deploy-sh-starts-it",
    "title": "The SMTP daemon, and deploy.sh starts it",
    "date": "2026-08-18",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "email"
    ],
    "category": "Commit",
    "excerpt": "Two listeners with different rules: an MX port for anonymous strangers, and a submission port for our own users. Verified against the running daemon rather than only in tests \u2014 a message delivered over a real socket into",
    "sha": "f558604",
    "content": [
      {
        "type": "p",
        "text": "Two listeners with different rules: an MX port for anonymous strangers, and a submission port for our own users. Verified against the running daemon rather than only in tests \u2014 a message delivered over a real socket into info@tnhc.dev, stored with transport=smtp and its Authentication-Results header prepended, and three refusals each returning 550: relaying to a third party, a local domain with no such mailbox, and unauthenticated submission."
      },
      {
        "type": "p",
        "text": "**RelayPolicy became async, and that was the point of the change.** The honest answer to \"do we host this address\" lives in the database. Accepting mail for a domain we serve and only then finding no mailbox exists would make this server a backscatter source \u2014 it would emit a bounce to a return path a spammer forged, which means mailing junk to a victim who never wrote to us. Refusing at RCPT costs us the fact that a refusal reveals whether an address exists; that is a real trade, made the same way by every serious mail server, because generating backscatter is the larger harm and is what gets a server blocklisted."
      },
      {
        "type": "p",
        "text": "A database failure during that lookup refuses the relay rather than answering \"not local\", so an outage of ours does not permanently bounce someone's mail."
      },
      {
        "type": "p",
        "text": "**Unprivileged loopback ports by default** (2525/2587). Binding 25 needs root or CAP_NET_BIND_SERVICE, and nothing reaches this node on 25 regardless: the ISP filters it and the tunnel does not carry SMTP. A daemon that refuses to start because it cannot bind a privileged port is worse than one that runs where it can and says so."
      },
      {
        "type": "p",
        "text": "**Policy mode defaults to observe**, and the daemon logs that it is doing so. Enforce refuses mail on the strength of this implementation's reading of someone else's DNS; it should be switched on after its Authentication-Results headers have been read against real traffic, not on the day it first runs."
      },
      {
        "type": "p",
        "text": "Both listeners share the process and the daemon exits if either dies, rather than silently serving half its job."
      },
      {
        "type": "p",
        "text": "143 tests, clippy clean. All six public hosts unchanged."
      }
    ]
  },
  {
    "slug": "authenticate-inbound-mail-at-the-smtp-door",
    "title": "Authenticate inbound mail at the SMTP door",
    "date": "2026-08-18",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "email"
    ],
    "category": "Commit",
    "excerpt": "The crate decided; nothing consulted it. Now the SMTP path does.",
    "sha": "60e4f05",
    "content": [
      {
        "type": "p",
        "text": "The crate decided; nothing consulted it. Now the SMTP path does."
      },
      {
        "type": "p",
        "text": "Three things had to exist for this to be real: a DNS implementation behind the same trait the tests fake, a single verdict combining SPF, DKIM and DMARC, and a Sink that authenticates before storing."
      },
      {
        "type": "p",
        "text": "**The Sink contract changed to make refusal expressible.** It used to return \"stored or failed\", which cannot say \"the sending domain told us to reject this\". It now returns an optional SMTP reply, so a policy refusal is a 550 during the conversation rather than an accept-then-discard. A silent discard leaves the sender \u2014 sometimes a legitimate, misconfigured sender \u2014 believing the mail arrived."
      },
      {
        "type": "p",
        "text": "**The session now carries the client IP and HELO name.** SPF is a statement about which host was allowed to send, so a sink that never learns who connected cannot authenticate anything. The wire test asserts the IP actually arrives, because that plumbing failing silently would leave every SPF evaluation running against nothing."
      },
      {
        "type": "p",
        "text": "**SPF is evaluated against the envelope sender, not the From header.** They are frequently different and conflating them is a classic bug: forwarders rewrite the envelope and leave From alone, so the naive version fails every forwarded message. There is a test for exactly that case."
      },
      {
        "type": "p",
        "text": "**PolicyMode::Observe exists and is the setting to start in.** It evaluates everything, records the result, and delivers regardless \u2014 producing evidence to check this implementation against real mail before it is capable of losing any. Enforce honours the sending domain's own published policy."
      },
      {
        "type": "p",
        "text": "Quarantine delivers to a Junk folder rather than discarding, because the domain asked for suspicious mail to be set aside rather than destroyed, and honouring that literally is the whole difference between quarantine and reject. Junk is created on first use rather than given to every mailbox at creation."
      },
      {
        "type": "p",
        "text": "Authentication-Results is prepended even on a pass. A later dispute about whether a message was authentic is unanswerable if the evidence was discarded at delivery time."
      },
      {
        "type": "p",
        "text": "Inbound SMTP is now recorded with Transport::Smtp, distinct from a federated handover: one came from an anonymous stranger, the other was vouched for by a peer we already trust, and later trust decisions depend on telling them apart."
      },
      {
        "type": "p",
        "text": "8 new tests including a spoofed bank sender being rejected under p=reject, quarantined under p=quarantine, and delivered under p=none. 143 across the workspace. Clippy clean."
      }
    ]
  },
  {
    "slug": "spf-evaluation-and-dmarc-alignment",
    "title": "SPF evaluation and DMARC alignment",
    "date": "2026-08-18",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "email"
    ],
    "category": "Commit",
    "excerpt": "DKIM proves a message was not altered. SPF says whether that server was allowed to send it. DMARC says what to do when they disagree \u2014 and it is the one that actually stops someone sending as your domain.",
    "sha": "94a0c98",
    "content": [
      {
        "type": "p",
        "text": "DKIM proves a message was not altered. SPF says whether that server was allowed to send it. DMARC says what to do when they disagree \u2014 and it is the one that actually stops someone sending as your domain."
      },
      {
        "type": "p",
        "text": "**Alignment is where the security lives, and it has eight tests.** An unaligned pass proves only that *somebody* authenticated, not that the domain in From did: an attacker signs with a domain they control, or publishes an SPF record authorising their own server, then puts your address in From. Without the alignment check both of those are a DMARC pass for your domain. Breaking `aligned()` turns eight tests red, verified by doing it."
      },
      {
        "type": "p",
        "text": "DMARC passes when **either** DKIM or SPF passes *and* is aligned. Either, not both \u2014 that asymmetry is deliberate and is what lets mail survive forwarding, which breaks SPF while leaving DKIM intact."
      },
      {
        "type": "p",
        "text": "**SPF's ten-lookup budget is a denial-of-service control, not tidiness.** SPF is a recursive language over records other people control, so without a hard cap one evaluation fans out into thousands of queries aimed at us and at whoever the records name. The budget is enforced, `mx` charges for each host it resolves rather than hiding a fan-out inside one budgeted mechanism, include loops terminate, and the test asserts evaluation actually stopped early rather than merely that the answer was PermError."
      },
      {
        "type": "p",
        "text": "Distinctions that decide whether real mail survives:"
      },
      {
        "type": "p",
        "text": "- **No record is `none`, not a failure.** Most domains still publish no SPF and no DMARC; treating absence as failure would reject most of the internet. - **A published `p=none` is not the same as no record.** It means \"we are watching\", and acting on it as reject breaks mail from every domain still rolling DMARC out \u2014 which is most of them. - **A DNS failure is temperror, never a rejection.** A resolver wobble is our problem, not the sender's. - **Two SPF records is an error rather than a guess**, or a domain gets different answers from different receivers."
      },
      {
        "type": "p",
        "text": "One approximation, documented in the code and the README instead of hidden: relaxed alignment needs the Public Suffix List to be correct, and without it naive \"last two labels\" would treat a.co.uk and b.co.uk as one organization \u2014 accepting forged mail as aligned. A small suffix set is handled explicitly and the limitation is written down."
      },
      {
        "type": "p",
        "text": "45 tests in this crate, 135 across the workspace. Clippy clean."
      },
      {
        "type": "p",
        "text": "Not yet wired: the inbound SMTP path does not call any of this. The crate decides; nothing consults it. That connection is the next piece."
      }
    ]
  },
  {
    "slug": "dkim-signing-and-verification",
    "title": "DKIM signing and verification",
    "date": "2026-08-18",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "email"
    ],
    "category": "Commit",
    "excerpt": "Without this, mail from this node is treated as suspicious by every major receiver even once a port opens, so it comes before IMAP.",
    "sha": "b9ef62e",
    "content": [
      {
        "type": "p",
        "text": "Without this, mail from this node is treated as suspicious by every major receiver even once a port opens, so it comes before IMAP."
      },
      {
        "type": "p",
        "text": "**Canonicalization is tested against RFC 6376's own vectors, not our expectations.** The failure mode is asymmetric and silent: a signature that verifies only in this implementation means every message we send is judged forged, and our own tests would never tell us. Both algorithms are implemented, and all four c= pairings are exercised \u2014 receivers use all of them, and a bug in one is invisible if only the common pairing is tested."
      },
      {
        "type": "p",
        "text": "Verification is split from the DNS lookup deliberately: the cryptographic half is pure and testable without a resolver, so a logic bug cannot hide behind a network call."
      },
      {
        "type": "p",
        "text": "What the tests actually assert is tampering being caught, because a signature that cannot detect it is worse than none \u2014 it asserts an authenticity it never checked. A rewritten body, a rewritten Subject, a forged From, text appended after the signed content, and another domain's key are each their own test. A body change is reported distinctly from a signature failure, because it points at a relay rewriting content rather than at a forgery."
      },
      {
        "type": "p",
        "text": "An empty p= is a revoked key and is refused rather than treated as \"no opinion\", which would let a compromised key keep working."
      },
      {
        "type": "p",
        "text": "One real subtlety, recorded in the code because it will bite someone again: our header parser left-trims values, so the original bytes of the DKIM-Signature line are gone by verification time. Under `relaxed` that is harmless, but `simple` hashes the field verbatim \u2014 signer and verifier must agree on the space after the colon or every simple-canonicalized signature fails. One space is what `Name: value` means in practice; the limitation is documented where the assumption is made."
      },
      {
        "type": "p",
        "text": "**A finding worth acting on beyond this crate:** the repository lives on an NTFS/fuseblk volume where chmod silently does nothing. A DKIM private key written there has no permissions at all, and it is the authority to send as the domain. The generator now defaults to $HOME/.config/nexus-email, verifies the resulting mode rather than assuming it, and warns loudly if 0600 did not take."
      },
      {
        "type": "p",
        "text": "19 tests here, 109 across the workspace. Clippy clean."
      },
      {
        "type": "p",
        "text": "Still not written: SPF and DMARC."
      }
    ]
  },
  {
    "slug": "smtp-outbound-mx-resolution-delivery-client-and-the-worker",
    "title": "SMTP outbound \u2014 MX resolution, delivery client, and the worker",
    "date": "2026-08-18",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "email"
    ],
    "category": "Commit",
    "excerpt": "Step 6 of 7. The queue can now reach the outside world, and was run against reality rather than only against tests.",
    "sha": "40a6b18",
    "content": [
      {
        "type": "p",
        "text": "Step 6 of 7. The queue can now reach the outside world, and was run against reality rather than only against tests."
      },
      {
        "type": "p",
        "text": "**Anything that is not an explicit permanent refusal is deferred.** That asymmetry runs through the whole crate and is the single most consequential decision in it: deferring mail that was genuinely undeliverable costs a few days of retries and one bounce, while bouncing mail that would have gone through loses it and the sender has no copy. So a dropped connection, a timeout, an unparseable reply, an unrecognised status code and a filtered port all mean \"try again\"."
      },
      {
        "type": "p",
        "text": "That is not hypothetical here. Outbound 25 is filtered on this connection over both IPv4 and IPv6, so every direct attempt fails at connect. Running the worker against the live queue: it resolved gmail.com's MX records, tried them in preference order, timed out on each, and left the message pending with attempts=1, a retry scheduled, and the exact reason recorded. Had connect failure read as permanent, the queue would have bounced perfectly good mail the moment an egress path appeared."
      },
      {
        "type": "p",
        "text": "Other decisions worth knowing:"
      },
      {
        "type": "p",
        "text": "- **A permanent refusal from one mail exchanger ends the attempt.** Trying the domain's backup would collect the same refusal; 5xx is the domain's answer, not that host's opinion. - **No MX record is permanent; a DNS failure is not.** A domain that publishes no way to receive mail will not grow one, but a resolver that blinked is not grounds for throwing mail away. RFC 7505's null MX is honoured, and the implicit-MX A-record fallback still works for small domains that rely on it. - **Body lines beginning with a dot are stuffed.** Without it the receiving server reads that line as end-of-message and silently truncates the rest, which is the kind of corruption nobody notices until it matters. - **Multi-line replies are parsed properly.** A client that reads one line falls a reply behind for the whole conversation \u2014 I hit exactly that in my own test client and fixed the client, not the server."
      },
      {
        "type": "p",
        "text": "The delivery worker claims work with the queue's existing SKIP LOCKED claim, so several workers can run without sending anything twice."
      },
      {
        "type": "p",
        "text": "8 tests here, 90 across the workspace. Clippy clean, no warnings."
      },
      {
        "type": "p",
        "text": "Not written, and named so it is not mistaken for done: DKIM signing on the way out, and SPF/DKIM/DMARC verification on the way in."
      }
    ]
  },
  {
    "slug": "smtp-inbound-the-session-the-listener-and-the-relay-policy",
    "title": "SMTP inbound \u2014 the session, the listener, and the relay policy",
    "date": "2026-08-18",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "email"
    ],
    "category": "Commit",
    "excerpt": "Step 5 of 7. This is the first code in the system that anonymous strangers can reach, and it is written accordingly.",
    "sha": "844a354",
    "content": [
      {
        "type": "p",
        "text": "Step 5 of 7. This is the first code in the system that anonymous strangers can reach, and it is written accordingly."
      },
      {
        "type": "p",
        "text": "**The session is a pure state machine over lines of text** \u2014 no sockets, no database, no clock. That is not an aesthetic preference: it means every rule governing whether a stranger may send mail through this server can be tested exhaustively, and an open relay is found by the internet within hours with reputational damage that is not recoverable. The relay guard has three tests, and removing it turns all three red \u2014 verified by deliberately breaking it."
      },
      {
        "type": "p",
        "text": "The rules, and why each exists:"
      },
      {
        "type": "p",
        "text": "- **Anonymous senders (port 25) may only deliver to mailboxes we host.** Carrying mail to a third party for a stranger is the definition of an open relay. Submission (587) is gated on authentication instead, because its whole purpose is sending outward. - **A session does not start authenticated**, asserted rather than assumed: a bug that flips that default is an open relay. - **AUTH is refused on the MX port.** Offering it there invites credential stuffing against a service with no reason to accept credentials. - **VRFY and EXPN never reveal whether an address exists.** The reply is identical for a real and a fake address, because answering truthfully hands a stranger a list of who lives here. There is a test comparing the two replies. - **Bad commands are counted and the connection dropped**, or a stranger holds a socket open indefinitely feeding garbage. Idle connections time out too. - **An oversized message is refused without killing the session**, so the sender learns why instead of retrying forever, and the advertised SIZE is tested to match the enforced one \u2014 advertising a limit we do not honour is lying to a sender who trusted it. - **Dot-stuffing is undone.** Getting this wrong corrupts any message containing a line beginning with a dot."
      },
      {
        "type": "p",
        "text": "Command parsing is deliberately narrow: an unrecognised verb earns a 500 rather than a guess. That is the opposite of the message parser, which is lenient \u2014 and the difference is intentional. Leniency in a body saves real mail; leniency in a command grammar is an attack surface, because no legitimate sender depends on us interpreting a malformed verb."
      },
      {
        "type": "p",
        "text": "The listener acknowledges only *after* the message is stored. Replying 250 and then failing tells a sender their mail was accepted when it was not, which is how mail is silently lost; a failed store is a 451 so they retry."
      },
      {
        "type": "p",
        "text": "21 tests here, 82 across the workspace. Clippy clean."
      },
      {
        "type": "p",
        "text": "Not yet written, and named so it is not mistaken for done: SPF, DKIM and DMARC verification on inbound."
      }
    ]
  },
  {
    "slug": "webmail-in-the-shell",
    "title": "Webmail in the shell",
    "date": "2026-08-18",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "mail"
    ],
    "category": "Commit",
    "excerpt": "Step 4 complete. app.tnhc.dev/mail lists folders, reads messages, searches and composes \u2014 and the first real message has been sent through it.",
    "sha": "bc660f1",
    "content": [
      {
        "type": "p",
        "text": "Step 4 complete. app.tnhc.dev/mail lists folders, reads messages, searches and composes \u2014 and the first real message has been sent through it."
      },
      {
        "type": "p",
        "text": "**The proxy is the only thing between a signed-in user and everyone else's mail.** The mail service trusts X-Nexus-Subject to decide whose mailbox to open, so the dashboard takes that subject from Auth on every request and strips any the browser sent. Without that, adding one header would let any user read any mailbox; there is a test for exactly that, and it is the most important test in this commit."
      },
      {
        "type": "p",
        "text": "The mail service binds loopback, which is a security control rather than a default: anything able to reach the port could claim to be anyone. deploy.sh starts it that way and says so."
      },
      {
        "type": "p",
        "text": "Decisions worth knowing:"
      },
      {
        "type": "p",
        "text": "- **The reader renders plain text, never the HTML part.** Injecting a stranger's HTML into the shell would hand them script execution on the one origin where the session cookie lives. Rendering HTML mail safely needs sandboxing and sanitising that does not exist yet; until it does, text is the honest option and the UI says when a message has only an HTML body. - **Compose shows per-recipient outcomes, not one \"sent\".** A message can be delivered to three people and rejected for a fourth, and collapsing that hides the part the sender must act on. - **\"No mailbox yet\" is not an error.** It is the ordinary state of a new account, and telling someone their mail is broken when they simply have no address is worse than saying nothing."
      },
      {
        "type": "p",
        "text": "Two bugs found by using it rather than by testing it:"
      },
      {
        "type": "p",
        "text": "Sending composed From out of the internal user id, producing senders like usr-msosh4ui-2@tnhc.dev \u2014 not routable back to the sender and not something anyone wants in an inbox. It now uses the mailbox's primary address."
      },
      {
        "type": "p",
        "text": "NEXUS_EMAIL_URL was captured into a module-level const, so a test importing src/server first froze the value and later files silently talked to the wrong port \u2014 the same import-order trap cloud-proxy.test.ts documents. Read per call now."
      },
      {
        "type": "p",
        "text": "Live: /mail and /mail/compose serve, mail to info@tnhc.dev delivers with no SMTP involved, mail to a gmail address queues for delivery, search finds a message by a word from its body, an unauthenticated call is refused, and a spoofed subject header returns the caller's own mailbox rather than the victim's."
      },
      {
        "type": "p",
        "text": "61 email tests, 49 dashboard server tests, 87 frontend tests. Clippy clean."
      }
    ]
  },
  {
    "slug": "search-and-the-http-api-the-webmail-will-consume",
    "title": "Search, and the HTTP API the webmail will consume",
    "date": "2026-08-18",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "email"
    ],
    "category": "Commit",
    "excerpt": "Step 4's backend half. Driven end to end over HTTP before committing: send a message, list the inbox, read it, search it, and confirm a message belonging to someone else returns 404.",
    "sha": "4d94119",
    "content": [
      {
        "type": "p",
        "text": "Step 4's backend half. Driven end to end over HTTP before committing: send a message, list the inbox, read it, search it, and confirm a message belonging to someone else returns 404."
      },
      {
        "type": "p",
        "text": "**Search** stores the displayable text explicitly rather than deriving it at query time. The body is raw RFC 5322 bytes \u2014 possibly base64, possibly a legacy charset, possibly a multipart tree \u2014 so decoding it per query would be slow and wrong. The delivery path already parses the message, so it extracts the text once and records it. The tsvector is a generated column, which means it cannot drift from its inputs: there is no code path that updates one without the other."
      },
      {
        "type": "p",
        "text": "Text/plain is preferred over text/html for indexing, because indexing markup means indexing tag names and inline styles, which match everything and mean nothing."
      },
      {
        "type": "p",
        "text": "**Search is scoped by mailbox membership, not by querying messages directly.** The same message row is shared between mailboxes by design, so a query against `messages` would return mail the caller does not hold. There is a test that a third party cannot find someone else's message, because this is the kind of mistake that is invisible until it is a disclosure."
      },
      {
        "type": "p",
        "text": "**The API binds loopback and trusts X-Nexus-Subject**, set by the Dashboard after it asks Auth who the caller is \u2014 the same trust model the Cloud console proxy uses. That is only sound because nothing off this machine can reach the port, so the bind address is a security control rather than a deployment detail, and both the module docs and the README say so."
      },
      {
        "type": "p",
        "text": "Reading a message goes through the membership join, so a valid message id is not enough to read mail you do not hold \u2014 verified over HTTP, not just asserted."
      },
      {
        "type": "p",
        "text": "Clippy flagged a repeated eight-field row tuple; factored into a named SummaryRow with one conversion rather than silenced, which also removed a duplicated mapping closure."
      },
      {
        "type": "p",
        "text": "61 tests passing, clippy clean."
      }
    ]
  },
  {
    "slug": "internal-and-federated-delivery",
    "title": "Internal and federated delivery",
    "date": "2026-08-18",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "email"
    ],
    "category": "Commit",
    "excerpt": "Step 3 of 7, and the point at which this is a usable mail product: people on this node can mail each other, nodes can mail each other, threads and folders work \u2014 with no SMTP anywhere in it.",
    "sha": "7648899",
    "content": [
      {
        "type": "p",
        "text": "Step 3 of 7, and the point at which this is a usable mail product: people on this node can mail each other, nodes can mail each other, threads and folders work \u2014 with no SMTP anywhere in it."
      },
      {
        "type": "p",
        "text": "Routing has three answers, and only the third involves SMTP. Local is a database write with no network at all. Federated crosses the authenticated node-to-node channel, because two systems that already trust each other gain nothing from a protocol designed for strangers and inherit its spam and reputation problems by using it. External is the outside world, and the only route that depends on an unfiltered port 25."
      },
      {
        "type": "p",
        "text": "Decisions worth knowing:"
      },
      {
        "type": "p",
        "text": "- **Recipients succeed and fail independently.** A message to five people where one address does not exist delivers to the other four and reports exactly which one failed. The queue is one row per recipient for the same reason. - **A message is stored once, before routing.** Every recipient \u2014 local, federated, external \u2014 and the sender's own Sent copy reference that single row. A sent message is not a second copy of itself. - **\"No such mailbox\" is permanent, not an error.** The address will not start existing on a retry, so the sender is told now rather than in five days. - **We refuse mail for domains we do not serve**, or the node becomes an open relay for the federation. - **Provenance is recorded at write time.** A message that arrived over the node channel is marked differently from one an anonymous stranger sent, so later trust decisions can tell them apart."
      },
      {
        "type": "p",
        "text": "Retry backoff runs 1m, 5m, 15m, 1h, 4h, 12h then daily, giving up after about five days \u2014 the convention every mail system settled on because it spans a weekend. Claiming uses FOR UPDATE SKIP LOCKED so several delivery workers cannot send the same message twice."
      },
      {
        "type": "p",
        "text": "Two bugs the tests caught, both worth naming:"
      },
      {
        "type": "p",
        "text": "The retry-exhaustion test failed because `mark_attempt_failed` took the attempt count from its caller, so a caller could pass a stale one and the message would retry forever without ever bouncing \u2014 silent, and visible only as a queue that never drains. It now reads and increments the counter itself inside a transaction, which removes the whole class of mistake."
      },
      {
        "type": "p",
        "text": "Two queue tests passed alone and failed together: `claim_due` takes whatever is pending, including rows belonging to other tests running in parallel. That was test isolation, not product behaviour, but it is exactly the interference two real delivery workers would have had if claiming were not properly locked."
      },
      {
        "type": "p",
        "text": "19 tests here, 59 across the workspace. Clippy clean."
      }
    ]
  },
  {
    "slug": "rfc-5322-and-mime-parsing-and-generation",
    "title": "RFC 5322 and MIME \u2014 parsing and generation",
    "date": "2026-08-18",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "email"
    ],
    "category": "Commit",
    "excerpt": "Step 2 of 7. The thing every later step moves: messages in and out of the wire format the world uses.",
    "sha": "53d4ddc",
    "content": [
      {
        "type": "p",
        "text": "Step 2 of 7. The thing every later step moves: messages in and out of the wire format the world uses."
      },
      {
        "type": "p",
        "text": "Two rules run through the crate, and they point in opposite directions."
      },
      {
        "type": "p",
        "text": "**Parsing is total and lenient.** These functions will face bytes chosen by anonymous strangers on a public port, so nothing panics, every loop is bounded, and a single malformed header does not lose a message. Real mail is full of small violations every other client tolerates: bare LF endings, folded headers, lines with no colon, invalid UTF-8 in a Subject, multiparts with no boundary. Each of those has a test, because each is how mail actually arrives rather than how RFC 5322 says it should look."
      },
      {
        "type": "p",
        "text": "**Generation is strict.** CRLF throughout, RFC 5322 dates rather than ISO 8601, RFC 2047 encoded words for non-ASCII headers. The round-trip tests assert there is no bare LF anywhere in generated output \u2014 verified to catch a regression by emitting one deliberately. That matters beyond pedantry: a message assembled with bare LF is rewritten in transit, which breaks a DKIM signature computed over the original bytes."
      },
      {
        "type": "p",
        "text": "Deliberate decisions worth knowing:"
      },
      {
        "type": "p",
        "text": "- The body is returned byte for byte and never re-encoded. DKIM signs what arrived; normalising here would break every signature we later verify. - Repeated headers are kept in order. Received: is one per hop and that order is the delivery path \u2014 collapsing duplicates into a map destroys the only record of how a message reached us. - MIME nesting is capped at 32. Unbounded recursion on attacker-supplied structure is a stack overflow, and a message nested 200 deep is hostile. - Legacy charsets are honoured. Mail predates UTF-8 and still carries ISO-8859-* and friends; assuming UTF-8 turns ordinary European mail into replacement characters. - Quoted-printable is written out rather than pulled from a crate: what to do with a malformed escape is a protocol decision, not a cryptographic primitive, and passing it through literally is what keeps a stray '=' from destroying a body."
      },
      {
        "type": "p",
        "text": "28 tests here, 40 across the workspace. Clippy clean."
      }
    ]
  },
  {
    "slug": "the-mail-store-and-identity-model",
    "title": "The mail store and identity model",
    "date": "2026-08-18",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "email"
    ],
    "category": "Commit",
    "excerpt": "Step 1 of 7 in the Nexus Email build order. No network code \u2014 this step exists to get the relations right, because steps 2-7 build on this schema and changing it later means migrating real mail.",
    "sha": "0c1967b",
    "content": [
      {
        "type": "p",
        "text": "Step 1 of 7 in the Nexus Email build order. No network code \u2014 this step exists to get the relations right, because steps 2-7 build on this schema and changing it later means migrating real mail."
      },
      {
        "type": "p",
        "text": "Two shapes drive the design, and a generic mail schema gets both wrong:"
      },
      {
        "type": "p",
        "text": "**An address is a routing rule, not an account.** A mailbox belongs to an ecosystem identity that already exists in Auth, or to the node itself. Role addresses like info@ and postmaster@ are node-owned, so no placeholder user has to exist to hold them, and aliases are ordinary rather than a special case."
      },
      {
        "type": "p",
        "text": "**A message is stored once.** Content-addressed by SHA-256 of its bytes, with mailbox membership, folder placement and per-mailbox flags in a join table. Delivering to five recipients writes one message row and five membership rows, each with independent read state."
      },
      {
        "type": "p",
        "text": "Constraints live in the database, not in application code, and were each verified to actually refuse the thing they describe: a message cannot be filed into another mailbox's folder (composite FK, not folder_id alone), a node-owned mailbox cannot carry an owner_subject, addresses are unique and must already be lowercased, a message must have exactly one body location, transport must be one of the three real ones, and a mailbox has at most one of each special-use folder."
      },
      {
        "type": "p",
        "text": "Bodies at or below 256 KiB are inline so the common read is one query; larger ones go to object storage keyed by content hash, because attachments are most of the bytes in real mail and Postgres is a poor blob store."
      },
      {
        "type": "p",
        "text": "The Python scaffold it replaces was empty \u2014 pyproject.toml, an unused src/main.py and an empty tests/__init__.py. Rust because the MTA these crates lead to parses hostile input from strangers on a public port."
      },
      {
        "type": "p",
        "text": "12 tests: 5 pure, 7 against a real PostgreSQL. The database tests panic rather than skip when no test database is configured \u2014 a silently skipped integration test reads as a passing one. Verified they catch regressions: removing the content-addressing lookup turns two of them red."
      }
    ]
  },
  {
    "slug": "nexus-email-a-sovereign-mail-system",
    "title": "Nexus Email \u2014 a sovereign mail system",
    "date": "2026-08-15",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "spec"
    ],
    "category": "Commit",
    "excerpt": "info@tnhc.dev on a mail server we wrote, receiving from anyone and sending to anyone, with no third-party mail service in the path.",
    "sha": "cc91dc4",
    "content": [
      {
        "type": "p",
        "text": "info@tnhc.dev on a mail server we wrote, receiving from anyone and sending to anyone, with no third-party mail service in the path."
      },
      {
        "type": "p",
        "text": "Records the measurement that shapes everything: TCP 25 outbound is filtered on this connection over both IPv4 and IPv6, while 587/465/443 are open. No software opens a filtered port, so egress is treated as a deployment property with two fully-Nexus answers \u2014 the ISP lifting the filter, or a second Nexus node with clean egress delivering our queue over the federated channel. The build is identical either way, so nothing waits on it."
      },
      {
        "type": "p",
        "text": "The central design decision is that SMTP is a gateway, not the substrate. Mail between Nexus users and between Nexus nodes never touches SMTP: it moves over the authenticated node channel, with no spam surface and no reputation problem. SMTP exists only because the rest of the world speaks it."
      },
      {
        "type": "p",
        "text": "Rust, because the MTA parses hostile input from strangers on a public port. We write every protocol decision ourselves \u2014 SMTP and IMAP state machines, message parsing, queue and retry, DKIM, SPF, DMARC, threading, search \u2014 and use vetted implementations for TLS, DNS and cryptographic primitives. Reinventing TLS is not sovereignty, it is a vulnerability."
      }
    ]
  },
  {
    "slug": "forward-the-client-s-scheme-not-the-tunnel-hop-s",
    "title": "Forward the client's scheme, not the tunnel hop's",
    "date": "2026-08-15",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "proxy"
    ],
    "category": "Commit",
    "excerpt": "`x-forwarded-proto` was built from `url.protocol`, which is always \"http:\" \u2014 the proxy listens in plaintext behind cloudflared. Every upstream was told it was answering over HTTP, so anything building an absolute URL emi",
    "sha": "50f2eec",
    "content": [
      {
        "type": "p",
        "text": "`x-forwarded-proto` was built from `url.protocol`, which is always \"http:\" \u2014 the proxy listens in plaintext behind cloudflared. Every upstream was told it was answering over HTTP, so anything building an absolute URL emitted an http:// one."
      },
      {
        "type": "p",
        "text": "Hosting was the first to break visibly on it: its OIDC redirect_uri came out as http://hosting.tnhc.dev/api/callback and Auth rejected the authorization request with 400, making sign-in impossible. Confirmed before and after \u2014 400 became a 303 into Auth's login flow."
      },
      {
        "type": "p",
        "text": "Same reasoning gate.ts already applies in publicUrl(): nothing reachable through this proxy is served over plain HTTP publicly, so https is the truthful answer for every request that arrives here."
      },
      {
        "type": "p",
        "text": "Also bumps the Nexus pointer for the chat send/reload fixes."
      }
    ]
  },
  {
    "slug": "channels-can-be-created-and-existing-ones-actually-show",
    "title": "Channels can be created, and existing ones actually show",
    "date": "2026-08-14",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "chat"
    ],
    "category": "Commit",
    "excerpt": "Pointer bump. The web client declared the channel type field as `kind` while the API sends and expects `channel_type`, so the channel list rendered empty and every create attempt 422'd into console.error.",
    "sha": "1ac1b24",
    "content": [
      {
        "type": "p",
        "text": "Pointer bump. The web client declared the channel type field as `kind` while the API sends and expects `channel_type`, so the channel list rendered empty and every create attempt 422'd into console.error."
      }
    ]
  },
  {
    "slug": "read-the-fields-cloud-actually-returns",
    "title": "Read the fields Cloud actually returns",
    "date": "2026-08-14",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "cloud-views"
    ],
    "category": "Commit",
    "excerpt": "The console and the control plane disagreed, and the console lost quietly.",
    "sha": "bd021be",
    "content": [
      {
        "type": "p",
        "text": "The console and the control plane disagreed, and the console lost quietly."
      },
      {
        "type": "p",
        "text": "`/api/v1/status` has never carried `tools.total`, `users.total`, `peers.total` or `node.*` \u2014 its counters are flat and differently named. status.html read the nested names, found undefined, and rendered 0 for all of them. The overview has been reporting an empty node while Cloud reported 86 tools, 36 of them healthy and 5 exposed. Peers live under `trust.peers`, not at the top level."
      },
      {
        "type": "p",
        "text": "The endpoints were right. The types are now transcribed from the live responses rather than from the code that consumed them."
      },
      {
        "type": "p",
        "text": "Two judgement calls beyond a rename:"
      },
      {
        "type": "p",
        "text": "**The \"Users\" stat is gone**, replaced by exposed tools. Cloud has no user count and should not have one \u2014 accounts belong to Nexus-Auth, which is why its own POST /api/v1/users answers 410. A number Cloud cannot know does not belong on Cloud's overview."
      },
      {
        "type": "p",
        "text": "**`exampleAddress` is not renamed to `address`.** It is `@alice:<shortId>`, an illustration of the naming scheme rather than an address anyone holds, and status.html displayed it under \"NS Address\" \u2014 which reads as \"this node is @alice\". Reading the right field is only half the fix; it is now labelled as the format, with the node's own explanatory note beside it, and a test asserts that labelling so it cannot quietly regress."
      },
      {
        "type": "p",
        "text": "The fixtures were the deeper problem: they matched the code, not the server, so the tests passed green against a shape that does not exist. Both are now transcribed from live responses \u2014 which is why two of them failed on this change, exactly as they should have."
      },
      {
        "type": "p",
        "text": "Tests 82 -> 83, tsc clean. Live: overview now renders 36/86/5 where it rendered zeros; all five views 200; six hosts unchanged."
      }
    ]
  },
  {
    "slug": "point-the-launcher-at-cloud-retire-cloud-s-own-frontend",
    "title": "Point the launcher at /cloud; retire Cloud's own frontend",
    "date": "2026-08-14",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "Step 4 of moving Cloud's operator console into the shell (docs/superpowers/specs/2026-08-14-cloud-console-as-shell-views-design.md).",
    "sha": "4c3be15",
    "content": [
      {
        "type": "p",
        "text": "Step 4 of moving Cloud's operator console into the shell (docs/superpowers/specs/2026-08-14-cloud-console-as-shell-views-design.md)."
      },
      {
        "type": "p",
        "text": "toAppEntries() now rewrites Cloud's tile to the relative \"/cloud\" once its publicUrl matches the new cloudHost parameter (defaulting to cloud.$DOMAIN), and Launcher links a relative app url straight to its shell route instead of through /a/:id, which would otherwise iframe it as an external app. Every other app entry is untouched \u2014 this only changes how Cloud is routed."
      },
      {
        "type": "p",
        "text": "Bumps the Nexus-Cloud submodule pointer to 453bf27, which deletes status.html, handleDashboard and the /nexus-tokens.css route and makes GET / / GET /status answer with the JSON service pointer instead."
      }
    ]
  },
  {
    "slug": "drop-the-users-view-and-never-render-object-object",
    "title": "Drop the users view, and never render [object Object]",
    "date": "2026-08-14",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "cloud-views"
    ],
    "category": "Commit",
    "excerpt": "Two things the port surfaced that faithfulness alone answers badly.",
    "sha": "63f09d4",
    "content": [
      {
        "type": "p",
        "text": "Two things the port surfaced that faithfulness alone answers badly."
      },
      {
        "type": "p",
        "text": "**The users view can never load, so it is gone.** Cloud has delegated accounts to Nexus-Auth \u2014 its own POST /api/v1/users answers 410 saying exactly that \u2014 and its GET requires a Cloud session that SSO no longer issues, so it returns 401 even to the operator's API key. Verified directly against the running service. Porting it produced a view whose only possible state was an error, and shipping that is worse than not shipping it. A real user list belongs to Auth and is its own piece of work; the shell's /admin already owns the operator action that matters, approving access requests."
      },
      {
        "type": "p",
        "text": "The proxy's allow-list entry stays. It is the enforcement point a future Auth-backed users view will need, and it is the only adminOnly route, so deleting it would take the tests covering that mechanism with it."
      },
      {
        "type": "p",
        "text": "**Federation's trust column no longer degrades to \"[object Object]\".** status.html did `esc(p.trustLevel || p.trust)`, which printed that literally when trust was an object. Reproducing it faithfully would tell the operator nothing and read as a broken page \u2014 and React throws on an object child, so some handling was required regardless. It now reads the field a trust object actually carries and falls back to the same em-dash used for \"nothing to show\" elsewhere."
      },
      {
        "type": "p",
        "text": "Frontend tests 86 -> 81 (the five users-view tests go with the view); server 39 unchanged; tsc clean. All Cloud routes serve live and the six public hosts are unchanged."
      }
    ]
  },
  {
    "slug": "port-cloud-s-users-federation-identity-api-views-into-the-sh",
    "title": "Port Cloud's users/federation/identity/API views into the shell",
    "date": "2026-08-14",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "Step 3 of the cloud-console-as-shell-views migration: four new /cloud/* routes (users, federation, identity, api) ported from status.html's loadUsersView/loadFederationView/loadIdentityView/loadApiView, matching the same",
    "sha": "7519b29",
    "content": [
      {
        "type": "p",
        "text": "Step 3 of the cloud-console-as-shell-views migration: four new /cloud/* routes (users, federation, identity, api) ported from status.html's loadUsersView/loadFederationView/loadIdentityView/loadApiView, matching the same fields, grouping and empty states. Users is admin-only and renders the proxy's 403 as a distinct \"no permission\" state rather than an empty table or a generic error. Added a shared CloudNav tab strip so all six cloud pages are reachable from one another."
      }
    ]
  },
  {
    "slug": "port-cloud-s-overview-tools-views-into-the-shell",
    "title": "Port Cloud's overview + tools views into the shell",
    "date": "2026-08-14",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "Step 2 of moving Cloud's operator console into the ecosystem shell. Adds /cloud and /cloud/tools as shell-native views, wrapped in ShellView like /account and /admin, reached through the Dashboard server's read-only Clou",
    "sha": "95abd6f",
    "content": [
      {
        "type": "p",
        "text": "Step 2 of moving Cloud's operator console into the ecosystem shell. Adds /cloud and /cloud/tools as shell-native views, wrapped in ShellView like /account and /admin, reached through the Dashboard server's read-only Cloud proxy from step 1 \u2014 the browser never touches Cloud directly."
      },
      {
        "type": "p",
        "text": "Ports status.html's loadDashboard (node identity, trust lifecycle, recent trust actions, internal service tiles) and loadToolsView (registered tools table) faithfully, including their degrade-on-missing-data fallbacks. Both views render \"Cloud is unavailable\" rather than a blank or throwing page when the proxy returns its 503 cloud_unavailable."
      },
      {
        "type": "p",
        "text": "Users, federation and identity views, and deleting status.html, are later steps."
      }
    ]
  },
  {
    "slug": "allow-list-lookup-must-be-own-property-only",
    "title": "Allow-list lookup must be own-property only",
    "date": "2026-08-14",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "`name` comes straight from the URL, and every object inherits truthy `constructor`, `__proto__`, `toString` and `valueOf`. A bare `CLOUD_ALLOWLIST[name]` therefore returns something truthy for those, which sails past the",
    "sha": "0845a06",
    "content": [
      {
        "type": "p",
        "text": "`name` comes straight from the URL, and every object inherits truthy `constructor`, `__proto__`, `toString` and `valueOf`. A bare `CLOUD_ALLOWLIST[name]` therefore returns something truthy for those, which sails past the `if (!entry)` guard, skips the adminOnly check (undefined), and forwards to `${cloudBaseUrl()}undefined` \u2014 a URL-controlled request to the control plane carrying the operator's API key."
      },
      {
        "type": "p",
        "text": "Cloud would 404 it, so this is not a key disclosure. But the allow-list exists precisely so that nothing outside it is ever forwarded, and the code's own comment says the lookup \"must never fall through to a generic forward\". It did."
      },
      {
        "type": "p",
        "text": "Object.hasOwn closes it. Four new tests cover the inherited names; verified they fail against the previous lookup and pass after."
      },
      {
        "type": "p",
        "text": "Tests 35 -> 39."
      }
    ]
  },
  {
    "slug": "allow-listed-proxy-for-cloud-s-control-plane-api",
    "title": "Allow-listed proxy for Cloud's control-plane API",
    "date": "2026-08-14",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "Adds GET /api/cloud/<name> to the Dashboard server so the browser can read Cloud's audit/endpoints/users/federation/status/tools data without ever holding NEXUS_CLOUD_API_KEY. This is build-order step 1 of moving Cloud's",
    "sha": "d52a5c3",
    "content": [
      {
        "type": "p",
        "text": "Adds GET /api/cloud/<name> to the Dashboard server so the browser can read Cloud's audit/endpoints/users/federation/status/tools data without ever holding NEXUS_CLOUD_API_KEY. This is build-order step 1 of moving Cloud's operator console into the shell (see docs/superpowers/specs/2026-08-14-cloud-console-as-shell-views-design.md)."
      },
      {
        "type": "p",
        "text": "- Fixed allow-list of 7 names mapping to Cloud paths; anything else 404s before any request reaches Cloud. Only GET is wired; no mutating verb is ever proxied. - Reuses cloud.ts's existing cloudBaseUrl()/cloudHeaders() (now exported) instead of re-deriving the base URL and X-Api-Key header. - /api/cloud/users is admin-only, enforced server-side by asking Auth's /api/v1/auth/me for the caller's role (same mechanism the account/admin surfaces already use) and checking it against ADMIN_ROLES, mirroring frontend/src/api.ts. Fails closed on any signed-out/unreachable case. - Cloud being unreachable returns 503 JSON rather than throwing a 500 that would take the page down, matching fetchApps()'s existing degrade-not-fail contract for /api/apps."
      },
      {
        "type": "p",
        "text": "22 -> 35 passing tests (tests/cloud-proxy.test.ts, 13 new)."
      }
    ]
  },
  {
    "slug": "cloud-s-console-as-shell-native-views",
    "title": "Cloud's console as shell-native views",
    "date": "2026-08-14",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "spec"
    ],
    "category": "Commit",
    "excerpt": "Finishes what the shell started: port Cloud's six operator views into the shell and leave Cloud frontend-free. Two of its eight views \u2014 the launcher and the app frame \u2014 are a second, older implementation of the shell its",
    "sha": "036a179",
    "content": [
      {
        "type": "p",
        "text": "Finishes what the shell started: port Cloud's six operator views into the shell and leave Cloud frontend-free. Two of its eight views \u2014 the launcher and the app frame \u2014 are a second, older implementation of the shell itself and are deleted rather than ported."
      },
      {
        "type": "p",
        "text": "The browser never talks to Cloud directly: the Dashboard server already holds the API key, so it proxies an allow-list of paths. A blanket passthrough would hand any signed-in user the control-plane API with the operator's key attached."
      },
      {
        "type": "p",
        "text": "Records what is being deliberately lost: Cloud's pinned-apps, continue and open-apps tracking, which are the 'richer home' ideas already decided against. Deleted knowingly rather than silently."
      }
    ]
  },
  {
    "slug": "give-account-and-admin-the-ecosystem-chrome",
    "title": "Give account and admin the ecosystem chrome",
    "date": "2026-08-14",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "shell"
    ],
    "category": "Commit",
    "excerpt": "/account and /admin are signed-in surfaces the shell app owns, and they read as separate websites without the header and launcher beside them.",
    "sha": "50a47c5",
    "content": [
      {
        "type": "p",
        "text": "/account and /admin are signed-in surfaces the shell app owns, and they read as separate websites without the header and launcher beside them."
      },
      {
        "type": "p",
        "text": "Three groups now, each for its own reason:"
      },
      {
        "type": "p",
        "text": "- /request and /claim stay bare. They are public pages for people with no session and no apps, and chrome advertising a launcher they cannot use would be a lie. - / stays bare too, but for a different reason: signed in it renders the launcher grid, and the shell's sidebar is also a launcher. Wrapping it puts the same apps on screen twice. The grid is the home surface; the shell appears when you enter something. - /account and /admin get the shell."
      },
      {
        "type": "p",
        "text": "ShellView is deliberately not ShellRoute. For /a/:appId a failed app list means the app cannot be shown, so it renders an error and a retry. Here it only means an empty sidebar \u2014 account settings must still work. Treating it as fatal would turn an unrelated network blip into a broken account page, which is asserted by its own test."
      },
      {
        "type": "p",
        "text": "Verified the new tests fail without the change: unwrapping /account turned both of its tests red while /admin's stayed green."
      },
      {
        "type": "p",
        "text": "Tests 56 -> 60."
      }
    ]
  },
  {
    "slug": "make-the-nh-cli-actually-run-and-build",
    "title": "Make the nh CLI actually run and build",
    "date": "2026-08-14",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "hosting"
    ],
    "category": "Commit",
    "excerpt": "Pointer bump. Five independent faults meant the documented deploy path had never worked and the CLI had never produced a dist/. Verified with a real deploy of Draw through the CLI itself.",
    "sha": "63bf5ee",
    "content": [
      {
        "type": "p",
        "text": "Pointer bump. Five independent faults meant the documented deploy path had never worked and the CLI had never produced a dist/. Verified with a real deploy of Draw through the CLI itself."
      }
    ]
  },
  {
    "slug": "actually-render-the-shell-in-the-ecosystem-palette",
    "title": "Actually render the shell in the ecosystem palette",
    "date": "2026-08-14",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "shell"
    ],
    "category": "Commit",
    "excerpt": "The shell was the first surface to \"adopt\" the tokens and the only one that never did. It imported nexus-theme.css, which defines Tailwind's un-prefixed @theme names \u2014 but every component styles with zinc-* utilities, so",
    "sha": "eb0d6f5",
    "content": [
      {
        "type": "p",
        "text": "The shell was the first surface to \"adopt\" the tokens and the only one that never did. It imported nexus-theme.css, which defines Tailwind's un-prefixed @theme names \u2014 but every component styles with zinc-* utilities, so nothing referenced those names, Tailwind tree-shook the entire block, and the shell shipped painting stock #18181b. Verified against the live CSS: no token variables present at all."
      },
      {
        "type": "p",
        "text": "Once Draw, Chat and Cloud adopted the palette, the thing meant to define the design language became the only surface outside it."
      },
      {
        "type": "p",
        "text": "Fixed the way Draw was: import nexus-tokens.css for the raw --nexus-color-* properties and remap the zinc scale onto them, so every existing utility keeps working and starts rendering in the ecosystem's colours. Amber maps to the warning state token rather than the accent \u2014 in this app it is the notice and callout colour on the claim and request screens, not branding."
      },
      {
        "type": "p",
        "text": "Live CSS now defines --nexus-color-bg-canvas:#090d0d with zero stock zinc hex remaining. Tests unchanged: 22 backend, 56 frontend."
      }
    ]
  },
  {
    "slug": "adopt-ecosystem-design-tokens-via-zinc-scale-alias",
    "title": "Adopt ecosystem design tokens via zinc-scale alias",
    "date": "2026-08-14",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "draw"
    ],
    "category": "Commit",
    "excerpt": "Draw is Tailwind-only with ~90 zinc-* utility usages and no CSS custom properties of its own. Remap the zinc scale itself to the nexus-design tokens rather than touching any component: bg-zinc-800 keeps working and now r",
    "sha": "b358434",
    "content": [
      {
        "type": "p",
        "text": "Draw is Tailwind-only with ~90 zinc-* utility usages and no CSS custom properties of its own. Remap the zinc scale itself to the nexus-design tokens rather than touching any component: bg-zinc-800 keeps working and now resolves to --nexus-color-bg-surface etc."
      },
      {
        "type": "p",
        "text": "Imports nexus-tokens.css (not nexus-theme.css) \u2014 the raw --nexus-* custom properties the @theme override's var() references need to resolve. nexus-theme.css only defines Tailwind's un-prefixed @theme names (--color-bg-canvas, no nexus- prefix), which would leave the mapping pointing at nothing."
      },
      {
        "type": "p",
        "text": "build/dev scripts now regenerate packages/nexus-design's dist output first, matching the Dashboard precedent."
      }
    ]
  },
  {
    "slug": "vendor-script-drift-guard-for-chat-and-cloud-token-copies",
    "title": "Vendor script + drift guard for Chat and Cloud token copies",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "design"
    ],
    "category": "Commit",
    "excerpt": "Chat and Cloud are separate repositories and cannot import packages/nexus-design across the submodule boundary, so `npm run vendor` copies the generated nexus-tokens.css into each. A vitest-style (bun:test) suite asserts",
    "sha": "a2d2fae",
    "content": [
      {
        "type": "p",
        "text": "Chat and Cloud are separate repositories and cannot import packages/nexus-design across the submodule boundary, so `npm run vendor` copies the generated nexus-tokens.css into each. A vitest-style (bun:test) suite asserts every vendored copy stays byte-identical to fresh generator output, so a hand-edited or stale copy fails the suite instead of silently drifting."
      },
      {
        "type": "p",
        "text": "Bumps the apps/Nexus and apps/Nexus-Cloud submodule pointers to the commits that add their vendored copies."
      }
    ]
  },
  {
    "slug": "apps-adopt-the-ecosystem-design-tokens",
    "title": "Apps adopt the ecosystem design tokens",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "plan"
    ],
    "category": "Commit",
    "excerpt": "Four tasks to make Draw, Chat and Cloud render in the doctrine palette, so the surfaces inside the shell read as one product. Alias layers only \u2014 no component is rewritten. Chat and Cloud are separate repos and must keep",
    "sha": "2124c81",
    "content": [
      {
        "type": "p",
        "text": "Four tasks to make Draw, Chat and Cloud render in the doctrine palette, so the surfaces inside the shell read as one product. Alias layers only \u2014 no component is rewritten. Chat and Cloud are separate repos and must keep building standalone, so they get a vendored copy of the generated CSS guarded by a byte-identical drift test rather than an import across the submodule boundary."
      }
    ]
  },
  {
    "slug": "preserve-the-shell-plan-s-execution-ledger",
    "title": "Preserve the shell plan's execution ledger",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "The SDD workspace is git-ignored scratch and is deleted when a plan completes, but this ledger is the record of what was decided and why \u2014 four briefs were rewritten mid-plan because the plan's premises turned out to be ",
    "sha": "3567674",
    "content": [
      {
        "type": "p",
        "text": "The SDD workspace is git-ignored scratch and is deleted when a plan completes, but this ledger is the record of what was decided and why \u2014 four briefs were rewritten mid-plan because the plan's premises turned out to be wrong about production, and one task was refused outright as destructive. Keeping it means the next person can see the reasoning, not just the commits."
      }
    ]
  },
  {
    "slug": "pointer-bump-resolve-the-contradicting-frame-headers-on-the",
    "title": "Pointer bump \u2014 resolve the contradicting frame headers on the API",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "chat"
    ],
    "category": "Commit",
    "excerpt": "See the submodule commit for the fix: security_headers() emitted both X-Frame-Options: SAMEORIGIN and Content-Security-Policy: frame-ancestors * on every API response. Removes the former, corrects the latter to 'self' ht",
    "sha": "5c4ae28",
    "content": [
      {
        "type": "p",
        "text": "See the submodule commit for the fix: security_headers() emitted both X-Frame-Options: SAMEORIGIN and Content-Security-Policy: frame-ancestors * on every API response. Removes the former, corrects the latter to 'self' https://app.tnhc.dev."
      },
      {
        "type": "p",
        "text": "Live restart pending \u2014 recorded as blocked in the final-fixes report; this pointer bump reflects the source fix only."
      }
    ]
  },
  {
    "slug": "pointer-bump-clap-flag-fix-unblocks-nexus-proxy-cargo-test",
    "title": "Pointer bump \u2014 clap flag fix unblocks nexus-proxy cargo test",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "hosting"
    ],
    "category": "Commit",
    "excerpt": "Task 8b's frame_ancestors default test, and all coverage of the CSP emission it exercises, had never actually run: cargo test panicked on a clap debug assertion before any test executed. See the submodule commit for the ",
    "sha": "4aff020",
    "content": [
      {
        "type": "p",
        "text": "Task 8b's frame_ancestors default test, and all coverage of the CSP emission it exercises, had never actually run: cargo test panicked on a clap debug assertion before any test executed. See the submodule commit for the fix (add `long` to two bool #[arg]s)."
      }
    ]
  },
  {
    "slug": "regenerate-design-tokens-before-dev-not-just-build",
    "title": "Regenerate design tokens before dev, not just build",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "npm run dev never generated packages/nexus-design/dist/, so a fresh clone failed immediately on index.css's @import of a file that had never been generated. dev now runs the same token-generation step build already does ",
    "sha": "a011215",
    "content": [
      {
        "type": "p",
        "text": "npm run dev never generated packages/nexus-design/dist/, so a fresh clone failed immediately on index.css's @import of a file that had never been generated. dev now runs the same token-generation step build already does before starting vite."
      }
    ]
  },
  {
    "slug": "stop-the-api-server-s-csp-comment-claiming-a-fix-it-isn-t",
    "title": "Stop the API server's CSP comment claiming a fix it isn't",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "draw"
    ],
    "category": "Commit",
    "excerpt": "This server serves JSON only, never a document, so frame-ancestors on its json() helper does nothing. The old comment claimed it closed a clickjacking hole \u2014 a misleading claim worse than no comment, since someone readin",
    "sha": "3dda0a7",
    "content": [
      {
        "type": "p",
        "text": "This server serves JSON only, never a document, so frame-ancestors on its json() helper does nothing. The old comment claimed it closed a clickjacking hole \u2014 a misleading claim worse than no comment, since someone reading it would believe the surface was protected. The real protection for draw.tnhc.dev lives in Nexus-Hosting's proxy, which serves the actual SPA. Header kept (harmless, and correct if this server ever serves a document); comment rewritten to say so plainly."
      }
    ]
  },
  {
    "slug": "compact-topbar-when-embedded-not-hidden",
    "title": "Compact TopBar when embedded, not hidden",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "draw"
    ],
    "category": "Commit",
    "excerpt": "Task 9 hid TopBar wholesale when embedded, which silently dropped export (downloadPNG/downloadSVG, TopBar's only callers) and keyboard help (HelpOverlay, only mounted here) for every embedded user, with no hotkey fallbac",
    "sha": "7c9b9c0",
    "content": [
      {
        "type": "p",
        "text": "Task 9 hid TopBar wholesale when embedded, which silently dropped export (downloadPNG/downloadSVG, TopBar's only callers) and keyboard help (HelpOverlay, only mounted here) for every embedded user, with no hotkey fallback. That violates the dual-mode principle: an app must work standalone and embedded."
      },
      {
        "type": "p",
        "text": "TopBar now takes an `embedded` prop and omits only its branding/title block when true \u2014 export controls and HelpOverlay stay. The shell replaces the app's branding and account chrome; export and help are document actions, not chrome. Google Docs shape: the product's bar on top, the document's own toolbar beneath it."
      },
      {
        "type": "p",
        "text": "App.embed.test.tsx no longer mocks TopBar away \u2014 that mock is exactly how the original gap passed review. It now asserts what matters: embedded keeps the export controls and drops branding; standalone keeps both, byte-for-byte unchanged."
      }
    ]
  },
  {
    "slug": "close-the-shell-s-own-clickjacking-hole",
    "title": "Close the shell's own clickjacking hole",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "app.tnhc.dev is the authenticated front door \u2014 launcher, account, admin \u2014 and served no framing header at all. Add Content-Security-Policy: frame-ancestors 'self' to the index.html response. 'self' only, deliberately not",
    "sha": "e6b6796",
    "content": [
      {
        "type": "p",
        "text": "app.tnhc.dev is the authenticated front door \u2014 launcher, account, admin \u2014 and served no framing header at all. Add Content-Security-Policy: frame-ancestors 'self' to the index.html response. 'self' only, deliberately not the apps' origins: the shell frames the apps, nothing frames the shell, so it permits nobody."
      }
    ]
  },
  {
    "slug": "frame-the-console-in-the-shell-and-only-in-the-shell",
    "title": "Frame the console in the shell, and only in the shell",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "cloud"
    ],
    "category": "Commit",
    "excerpt": "Pointer bump for the Nexus-Cloud repo. Closes the last unprotected framing surface in the ecosystem: the control plane was framable by any site on the internet. Chat and Draw were fixed earlier in this plan.",
    "sha": "fddb077",
    "content": [
      {
        "type": "p",
        "text": "Pointer bump for the Nexus-Cloud repo. Closes the last unprotected framing surface in the ecosystem: the control plane was framable by any site on the internet. Chat and Draw were fixed earlier in this plan."
      }
    ]
  },
  {
    "slug": "honour-the-shell-s-embed-flag",
    "title": "Honour the shell's embed flag",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "draw"
    ],
    "category": "Commit",
    "excerpt": "?embed=1 suppresses Draw's own top bar so the shell's chrome is the only chrome on screen. A query parameter rather than postMessage or a header because it works identically from any language and any framework, and an ap",
    "sha": "68a0498",
    "content": [
      {
        "type": "p",
        "text": "?embed=1 suppresses Draw's own top bar so the shell's chrome is the only chrome on screen. A query parameter rather than postMessage or a header because it works identically from any language and any framework, and an app that ignores it still functions \u2014 just with doubled chrome. Degrading to slightly wrong beats degrading to blank."
      }
    ]
  },
  {
    "slug": "republish-minio-on-9010-so-storage-tnhc-dev-serves-again",
    "title": "Republish MinIO on 9010 so storage.tnhc.dev serves again",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "hosting"
    ],
    "category": "Commit",
    "excerpt": "Pointer bump for the Nexus-Hosting fix. The framing-header work restarted the hosting stack, which surfaced a latent port conflict; the conflict was resolved by dropping MinIO's host publish, but storage.tnhc.dev is a tu",
    "sha": "4e403d9",
    "content": [
      {
        "type": "p",
        "text": "Pointer bump for the Nexus-Hosting fix. The framing-header work restarted the hosting stack, which surfaced a latent port conflict; the conflict was resolved by dropping MinIO's host publish, but storage.tnhc.dev is a tunnel ingress onto that port and presigned upload URLs are signed against the hostname. Deploys would have failed at the PUT step."
      }
    ]
  },
  {
    "slug": "make-the-cli-a-first-class-ecosystem-surface",
    "title": "Make the CLI a first-class ecosystem surface",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "The whole ecosystem must be operable from a terminal, ranked alongside web, desktop and mobile rather than below them.",
    "sha": "e56c2a2",
    "content": [
      {
        "type": "p",
        "text": "The whole ecosystem must be operable from a terminal, ranked alongside web, desktop and mobile rather than below them."
      },
      {
        "type": "p",
        "text": "Advanced users preferring terminals is the weakest of the three reasons. The structural ones: the ecosystem is self-hosted, so an operator administering a node is already on that machine over SSH and requiring a browser to manage the thing they are logged into is backwards; and the CLI is the only surface that scripts, cron and CI can drive, which any node run by someone else will need."
      },
      {
        "type": "p",
        "text": "Records the shape too, because it follows from constraints already settled elsewhere. One binary that is an API client, resolving its command surface from the Cloud registry \u2014 the same source the shell launcher reads. The ecosystem is polyglot, so nothing requiring products to compile into a single host binary can work, exactly as with shell embedding. A product becomes CLI-addressable the way it becomes shell-addressable, which keeps the CLI a third client of the control plane rather than a parallel implementation of it."
      },
      {
        "type": "p",
        "text": "Names the blocking prerequisite: session cookies and 120-second identity tokens are browser- and proxy-shaped, so Auth needs scoped revocable tokens before any of this is buildable without reinventing a credential by hand each time."
      }
    ]
  },
  {
    "slug": "serve-frame-ancestors-csp-from-the-actual-public-path-nexus",
    "title": "Serve frame-ancestors CSP from the actual public path (nexus-proxy)",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "draw"
    ],
    "category": "Commit",
    "excerpt": "Task 8's frame-ancestors fix targeted apps/Nexus-Draw/src/server.ts on :3075, but draw.tnhc.dev is served as a static site through Nexus-Hosting's Rust proxy \u2014 port 3075 is only the board/collab API backend and was never",
    "sha": "7131ffe",
    "content": [
      {
        "type": "p",
        "text": "Task 8's frame-ancestors fix targeted apps/Nexus-Draw/src/server.ts on :3075, but draw.tnhc.dev is served as a static site through Nexus-Hosting's Rust proxy \u2014 port 3075 is only the board/collab API backend and was never reachable publicly. Bump the Nexus-Hosting submodule to add a configurable PROXY_FRAME_ANCESTORS (default 'self') emitted on every framable response, and set it to `'self' https://app.tnhc.dev` for this deployment so the shell can embed hosted sites while nobody else can."
      }
    ]
  },
  {
    "slug": "correct-framing-headers-on-the-embeddable-apps",
    "title": "Correct framing headers on the embeddable apps",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "security"
    ],
    "category": "Commit",
    "excerpt": "Measured before changing anything: Chat sent X-Frame-Options: DENY and could not be framed at all, while its CSP said frame-ancestors * \u2014 two directives contradicting each other. Draw sent no framing headers whatsoever, ",
    "sha": "1c9a683",
    "content": [
      {
        "type": "p",
        "text": "Measured before changing anything: Chat sent X-Frame-Options: DENY and could not be framed at all, while its CSP said frame-ancestors * \u2014 two directives contradicting each other. Draw sent no framing headers whatsoever, so any site on the internet could frame it, which is a live clickjacking exposure."
      },
      {
        "type": "p",
        "text": "Both now name the shell and nothing else. This enables the embed and tightens security at the same time, which is not the usual direction for a change that makes iframes work."
      }
    ]
  },
  {
    "slug": "distinguish-loading-failed-app-list-from-a-genuinely-unknown",
    "title": "Distinguish loading/failed app list from a genuinely unknown app",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "shell"
    ],
    "category": "Commit",
    "excerpt": "AppFrame claimed \"App not found.\" for any id absent from the current apps array, and App.tsx initialised that array to [] and passed it straight through \u2014 so a real, valid app rendered \"not found\" for the entire fetch wi",
    "sha": "df644c3",
    "content": [
      {
        "type": "p",
        "text": "AppFrame claimed \"App not found.\" for any id absent from the current apps array, and App.tsx initialised that array to [] and passed it straight through \u2014 so a real, valid app rendered \"not found\" for the entire fetch window, and a failed listApps() (silently caught) made that message permanent with no way to tell \"does not exist\" from \"did not load.\""
      },
      {
        "type": "p",
        "text": "Track the fetch as loading/ready/failed instead of just an array. Loading renders a neutral placeholder (AppFrame never sees an empty list as if it were authoritative); failed shows a distinct message with a retry button; only ready lets AppFrame call not-found, which is now correct because the list has actually loaded."
      }
    ]
  },
  {
    "slug": "the-app-list-has-three-states-not-two",
    "title": "The app list has three states, not two",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "plan"
    ],
    "category": "Commit",
    "excerpt": "Task 7's review caught that an empty app list is indistinguishable from an unknown app. Before listApps() resolves, and permanently if it rejects, a perfectly valid app id renders 'App not found.' \u2014 a real app looking de",
    "sha": "44bc06f",
    "content": [
      {
        "type": "p",
        "text": "Task 7's review caught that an empty app list is indistinguishable from an unknown app. Before listApps() resolves, and permanently if it rejects, a perfectly valid app id renders 'App not found.' \u2014 a real app looking deleted because a fetch was slow."
      },
      {
        "type": "p",
        "text": "The plan's own code caused this by initialising the list to []. Loading, ready and failed are now required to be distinct, and not-found may only be claimed once the list has actually loaded."
      }
    ]
  },
  {
    "slug": "route-a-appid-through-the-shell",
    "title": "Route /a/:appId through the shell",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "shell"
    ],
    "category": "Commit",
    "excerpt": "Signed-in routes gain the shell; /request and /claim deliberately do not. Someone claiming an account has no session and no apps to launch, so wrapping those pages in a launcher would be nonsense \u2014 and the test asserts t",
    "sha": "9271341",
    "content": [
      {
        "type": "p",
        "text": "Signed-in routes gain the shell; /request and /claim deliberately do not. Someone claiming an account has no session and no apps to launch, so wrapping those pages in a launcher would be nonsense \u2014 and the test asserts their absence so a later refactor cannot quietly add it."
      },
      {
        "type": "p",
        "text": "Home, Account and Admin are left unwrapped for now: Home self-branches between the signed-out landing (which must stay chrome-free like /request and /claim) and the signed-in Grid, so wrapping the route unconditionally would leak shell chrome onto the public landing. Deciding how those three pages join the shell is left to a follow-up task, consistent with the existing comment in App.tsx."
      }
    ]
  },
  {
    "slug": "mount-apps-in-a-frame",
    "title": "Mount apps in a frame",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "shell"
    ],
    "category": "Commit",
    "excerpt": "embedUrl builds the app address with ?embed=1 via URL rather than string concatenation, so an app that already carries a query keeps it and asking twice is harmless \u2014 the frame re-renders on navigation and must not accum",
    "sha": "32c789e",
    "content": [
      {
        "type": "p",
        "text": "embedUrl builds the app address with ?embed=1 via URL rather than string concatenation, so an app that already carries a query keeps it and asking twice is harmless \u2014 the frame re-renders on navigation and must not accumulate parameters."
      },
      {
        "type": "p",
        "text": "An unknown app id says so plainly. A blank content area is indistinguishable from a broken shell, and the id comes from the URL bar, so it will happen."
      },
      {
        "type": "p",
        "text": "No sandbox attribute: these are first-party apps needing scripts, forms, storage and their own origin. Sandboxing would break what the app needs while removing nothing an attacker has. Framing is constrained by frame-ancestors on the app's own host, which the next task sets."
      }
    ]
  },
  {
    "slug": "the-app-launcher",
    "title": "The app launcher",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "shell"
    ],
    "category": "Commit",
    "excerpt": "Lists the registry's apps and links them to /a/:id \u2014 into the shell rather than out to their own hosts, which is the entire point of having a shell.",
    "sha": "15dfb20",
    "content": [
      {
        "type": "p",
        "text": "Lists the registry's apps and links them to /a/:id \u2014 into the shell rather than out to their own hosts, which is the entire point of having a shell."
      },
      {
        "type": "p",
        "text": "An offline app renders as plain text, not a dead link, matching what the grid already does: inviting a click that goes nowhere is worse than showing the app is down. appById is shared with the frame so the two cannot disagree about what an app is, and returns undefined rather than throwing because an unknown id arrives from the URL bar."
      },
      {
        "type": "p",
        "text": "The nav gets its own aria-label (\"App launcher\") distinct from the enclosing aside's \"Applications\" \u2014 nesting two landmarks with the same accessible name would be confusing for assistive tech."
      }
    ]
  },
  {
    "slug": "sidebar-is-a-complementary-landmark-test-scopes-assertion",
    "title": "Sidebar is a complementary landmark, test scopes assertion",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "shell"
    ],
    "category": "Commit",
    "excerpt": "Round 1 review fix. The brief's Interfaces line claimed the sidebar renders a navigation landmark; that was wrong. A bare <aside> already has the implicit complementary role, so it now takes aria-label=\"Applications\" ins",
    "sha": "5fce9ff",
    "content": [
      {
        "type": "p",
        "text": "Round 1 review fix. The brief's Interfaces line claimed the sidebar renders a navigation landmark; that was wrong. A bare <aside> already has the implicit complementary role, so it now takes aria-label=\"Applications\" instead of a navigation role \u2014 role=\"navigation\" would have produced a nested duplicate once the Launcher's own <nav> lands inside it in Task 5."
      },
      {
        "type": "p",
        "text": "Also tightens the \"renders whatever sidebar it is given\" test, which previously used a bare getByText and would have passed even if the sidebar content rendered in main or outside every landmark. It now scopes the assertion to the complementary region and asserts absence from main, mirroring how the children test already asserts absence from banner."
      }
    ]
  },
  {
    "slug": "the-shell-sidebar-is-complementary-not-navigation",
    "title": "The shell sidebar is complementary, not navigation",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "plan"
    ],
    "category": "Commit",
    "excerpt": "Task 4's brief promised Shell would render a navigation landmark. It renders an <aside>, which is a complementary landmark, and the review correctly flagged the contract as unmet.",
    "sha": "d96e55a",
    "content": [
      {
        "type": "p",
        "text": "Task 4's brief promised Shell would render a navigation landmark. It renders an <aside>, which is a complementary landmark, and the review correctly flagged the contract as unmet."
      },
      {
        "type": "p",
        "text": "The contract was wrong, not the code. A sidebar is complementary; the navigation landmark belongs to the Launcher's own <nav>, which Task 5 nests inside it. Forcing role=navigation onto the aside would give two nested navigation landmarks \u2014 worse for a screen reader than the situation being fixed."
      }
    ]
  },
  {
    "slug": "the-three-regions",
    "title": "The three regions",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "shell"
    ],
    "category": "Commit",
    "excerpt": "Header, sidebar and content, named for the doctrine in docs/noname.md. The utility rail it also specifies is deliberately left unbuilt: an empty named region is more honest than an invented purpose.",
    "sha": "dfab898",
    "content": [
      {
        "type": "p",
        "text": "Header, sidebar and content, named for the doctrine in docs/noname.md. The utility rail it also specifies is deliberately left unbuilt: an empty named region is more honest than an invented purpose."
      },
      {
        "type": "p",
        "text": "Layout only \u2014 it fetches nothing, so it renders in a test without a server. Tests assert on landmark roles rather than test ids, because landmarks are what a screen reader consumes and the doctrine requires keyboard and accessibility support."
      }
    ]
  },
  {
    "slug": "untrack-the-typescript-build-cache",
    "title": "Untrack the TypeScript build cache",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "core"
    ],
    "category": "Commit",
    "excerpt": "tsconfig.tsbuildinfo is a tsc -b incremental cache, regenerated on every build. It was committed by a stray `git add -A` and the repo has been shipping a stale one ever since. The .gitignore pattern added alongside it on",
    "sha": "c75d43b",
    "content": [
      {
        "type": "p",
        "text": "tsconfig.tsbuildinfo is a tsc -b incremental cache, regenerated on every build. It was committed by a stray `git add -A` and the repo has been shipping a stale one ever since. The .gitignore pattern added alongside it only prevents new additions; a file already in the index stays there until it is removed."
      },
      {
        "type": "p",
        "text": "Removed from the index only \u2014 the file stays on disk, because the build uses it."
      }
    ]
  },
  {
    "slug": "forbid-git-add-a-and-correct-a-stale-test-baseline",
    "title": "Forbid git add -A, and correct a stale test baseline",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "plan"
    ],
    "category": "Commit",
    "excerpt": "A controller commit used git add -A and swept Task 3's deliverable into a commit whose message describes a documentation change. The code is right and the tree is clean, but anyone reading history will not find the imple",
    "sha": "884521b",
    "content": [
      {
        "type": "p",
        "text": "A controller commit used git add -A and swept Task 3's deliverable into a commit whose message describes a documentation change. The code is right and the tree is clean, but anyone reading history will not find the implementation where the message says it is. Staging is now required to be explicit."
      },
      {
        "type": "p",
        "text": "The plan also claimed the Dashboard frontend suite was 21 tests. It is 36 \u2014 the number was already stale when written, which would have had a later task 'restore' a count that was never current."
      }
    ]
  },
  {
    "slug": "adopt-the-ecosystem-design-tokens",
    "title": "Adopt the ecosystem design tokens",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "One @import, and the Dashboard's Tailwind utilities now resolve to the ecosystem palette instead of Tailwind's defaults. The theme import comes after the Tailwind import because the @theme block must be in scope.",
    "sha": "fa5f722",
    "content": [
      {
        "type": "p",
        "text": "One @import, and the Dashboard's Tailwind utilities now resolve to the ecosystem palette instead of Tailwind's defaults. The theme import comes after the Tailwind import because the @theme block must be in scope."
      },
      {
        "type": "p",
        "text": "Verified by what the app already uses: p-4 and text-sm resolve to --spacing-4:16px and --text-sm:14px, the ecosystem's values rather than Tailwind's 1rem and 0.875rem."
      },
      {
        "type": "p",
        "text": "The build script regenerates the tokens first, so a fresh clone cannot compile against a stale or missing dist/ and quietly get the wrong colours \u2014 dist/ is gitignored by design."
      }
    ]
  },
  {
    "slug": "fix-task-3-s-verification-which-failed-on-working-code",
    "title": "Fix Task 3's verification, which failed on working code",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "plan"
    ],
    "category": "Commit",
    "excerpt": "The check grepped the built CSS for the accent colour. Tailwind v4 emits a theme variable only when a utility uses it, and nothing in the Dashboard uses an accent utility yet \u2014 that arrives with the shell in Task 4. So t",
    "sha": "35380bc",
    "content": [
      {
        "type": "p",
        "text": "The check grepped the built CSS for the accent colour. Tailwind v4 emits a theme variable only when a utility uses it, and nothing in the Dashboard uses an accent utility yet \u2014 that arrives with the shell in Task 4. So the grep returned zero on a correct integration, and an implementer reasonably concluded Tailwind v4 cannot read @theme from an imported file and reported BLOCKED."
      },
      {
        "type": "p",
        "text": "It can. Adding a bg-bg-canvas usage puts --color-bg-canvas:#090d0d in the output. The verification now asserts on tokens the app already uses: p-4 and text-sm resolve to --spacing-4:16px and --text-sm:14px, which are the ecosystem's values and not Tailwind's 1rem and 0.875rem. That distinguishes a theme that was read from one that was ignored, which is what the step was for."
      }
    ]
  },
  {
    "slug": "unit-correct-token-values-and-real-tailwind-v4-namespaces",
    "title": "Unit-correct token values and real Tailwind v4 namespaces",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "design"
    ],
    "category": "Commit",
    "excerpt": "Round 1 fix on task 2. Two bugs in code the brief specified verbatim, both real:",
    "sha": "ef1ddd9",
    "content": [
      {
        "type": "p",
        "text": "Round 1 fix on task 2. Two bugs in code the brief specified verbatim, both real:"
      },
      {
        "type": "p",
        "text": "1. Numeric tokens (space, radius, typography.size, motion.duration) were emitted bare \u2014 `--nexus-space-4: 16;` \u2014 which is invalid as `var()` inside a length property, so the most-used tokens produced nothing. Units are now applied by top-level group: px for space/radius/typography.size, ms for motion.duration, left unitless for typography.weight/lineHeight/zIndex (genuinely unitless in CSS)."
      },
      {
        "type": "p",
        "text": "2. renderThemeCss only stripped the --nexus- prefix, so tokens landed on Tailwind v4 namespaces by accident (color, radius, shadow) or not at all \u2014 roughly 34 of 57 became inert custom properties while utilities like p-4 and text-sm silently kept Tailwind's built-in defaults. Each token is now mapped to the v4 namespace it actually powers (--spacing-*, --text-*, --font-*, --font-weight-*, --leading-*, --ease-*); motion.duration and zIndex have no v4 namespace and are emitted as plain custom properties with a comment explaining why."
      },
      {
        "type": "p",
        "text": "Tests extended to assert on the actual rendered strings (16px not 16, 400 with no unit, --spacing-4, --text-sm) plus the existing exhaustive drift checks, now unit- and namespace-aware."
      }
    ]
  },
  {
    "slug": "tokens-need-units-and-tailwind-v4-namespaces",
    "title": "Tokens need units and Tailwind v4 namespaces",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "plan"
    ],
    "category": "Commit",
    "excerpt": "Task 2's review found two defects in code the plan itself specified, both of which would have made the design system produce values nothing uses.",
    "sha": "fd66777",
    "content": [
      {
        "type": "p",
        "text": "Task 2's review found two defects in code the plan itself specified, both of which would have made the design system produce values nothing uses."
      },
      {
        "type": "p",
        "text": "Numeric tokens were emitted bare: --nexus-space-4: 16. CSS requires a unit, so padding: var(--nexus-space-4) is invalid and discarded. Units are group dependent \u2014 px for space, radius and font size; ms for durations; unitless for weight, line-height and z-index, which genuinely have no unit."
      },
      {
        "type": "p",
        "text": "The Tailwind output stripped the prefix and stopped there, so only color, radius and shadow happened to land on real v4 namespaces. Roughly 34 of 57 tokens became inert custom properties: p-4 and text-sm would keep Tailwind's defaults while appearing to be themed, which is the quietest possible way for a design system to not exist."
      }
    ]
  },
  {
    "slug": "the-token-file-and-its-generator",
    "title": "The token file and its generator",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "design"
    ],
    "category": "Commit",
    "excerpt": "tokens/nexus.tokens.json is transcribed verbatim from the schema in docs/noname.md \u2014 the palette, type scale, spacing, radii, shadows, motion and z-index that document specified and that nothing ever implemented.",
    "sha": "9ff2d86",
    "content": [
      {
        "type": "p",
        "text": "tokens/nexus.tokens.json is transcribed verbatim from the schema in docs/noname.md \u2014 the palette, type scale, spacing, radii, shadows, motion and z-index that document specified and that nothing ever implemented."
      },
      {
        "type": "p",
        "text": "Two outputs, one source: plain custom properties for any app in any language, and a Tailwind v4 @theme block for the React apps. Not a JS preset: all three React apps run Tailwind v4 with no config file, and v4 reads its theme from CSS, so a preset would have been ignored silently."
      },
      {
        "type": "p",
        "text": "The drift test checks every token reaches both outputs rather than sampling, because source and output disagreeing is the single failure this pipeline exists to prevent."
      }
    ]
  },
  {
    "slug": "flatten-nested-tokens-into-css-custom-properties",
    "title": "Flatten nested tokens into CSS custom properties",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "design"
    ],
    "category": "Commit",
    "excerpt": "The first half of the token pipeline. Nested JSON becomes flat --nexus-* pairs, depth-first so the generated CSS reads in the same order as the source and the two can be reviewed side by side.",
    "sha": "59f1104",
    "content": [
      {
        "type": "p",
        "text": "The first half of the token pipeline. Nested JSON becomes flat --nexus-* pairs, depth-first so the generated CSS reads in the same order as the source and the two can be reviewed side by side."
      },
      {
        "type": "p",
        "text": "Metadata keys are skipped: $schema, version and theme describe the file, not how anything looks, and emitting them as custom properties would be noise."
      }
    ]
  },
  {
    "slug": "correct-the-rationale-for-duplicating-isembedded",
    "title": "Correct the rationale for duplicating isEmbedded",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "plan"
    ],
    "category": "Commit",
    "excerpt": "Pre-flight scan flagged Tasks 9 and 10 creating the same four-line function, which reviewers treat as a defect. The duplication is right, but the reason given was not: it argued release coupling and the dual-mode princip",
    "sha": "a3e7e76",
    "content": [
      {
        "type": "p",
        "text": "Pre-flight scan flagged Tasks 9 and 10 creating the same four-line function, which reviewers treat as a defect. The duplication is right, but the reason given was not: it argued release coupling and the dual-mode principle, when the actual constraint is that apps/Nexus is a separate git repository and cannot import from the parent repo's packages/ at all."
      },
      {
        "type": "p",
        "text": "Recorded in Global Constraints so a reviewer meets the real justification rather than rediscovering the question."
      }
    ]
  },
  {
    "slug": "implementation-plan-for-the-ecosystem-shell-and-design-syste",
    "title": "Implementation plan for the ecosystem shell and design system",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "Eleven tasks, each ending in something independently testable: the token pipeline, the Dashboard adopting it, the shell regions, launcher and app frame, routing, framing headers, embed mode in Draw and Chat, and Cloud sh",
    "sha": "73c4e7b",
    "content": [
      {
        "type": "p",
        "text": "Eleven tasks, each ending in something independently testable: the token pipeline, the Dashboard adopting it, the shell regions, launcher and app frame, routing, framing headers, embed mode in Draw and Chat, and Cloud shedding its frontend."
      },
      {
        "type": "p",
        "text": "Planning corrected the spec twice, both times because I checked instead of assuming. All three React apps run Tailwind v4 with no config file, and v4 reads its theme from CSS \u2014 the JS preset the spec originally proposed would have been ignored silently. And @testing-library/jest-dom is not installed, so toBeInTheDocument() would fail; the plan's tests use plain assertions and the constraint is stated so nobody reaches for it reflexively."
      },
      {
        "type": "p",
        "text": "Verified before writing rather than after: every file path the plan tells someone to modify exists, and api.ts really does export listApps, me and AppEntry as tasks 5 through 7 assume."
      }
    ]
  },
  {
    "slug": "design-for-the-ecosystem-shell-and-design-system",
    "title": "Design for the ecosystem shell and design system",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "The first of five projects to make the ecosystem one product rather than a ring of separate sites: a shared design language, and a shell that hosts the apps.",
    "sha": "21ba3c0",
    "content": [
      {
        "type": "p",
        "text": "The first of five projects to make the ecosystem one product rather than a ring of separate sites: a shared design language, and a shell that hosts the apps."
      },
      {
        "type": "p",
        "text": "Two of the questions that prompted this are already answered in the project's own documents and were simply never built. docs/noname.md states that Nexus Cloud is the canonical host-shell, defines the shell regions, and specifies a complete design token schema at tokens/nexus.tokens.json. Verified absent: the token file, any shared UI package, any fingerprint artifacts. The doctrine is entirely unimplemented, and that gap is the project."
      },
      {
        "type": "p",
        "text": "Decided: apps render in a frame inside app-content, because the dual-mode principle and a polyglot ecosystem rule out anything requiring apps to be JS modules; the shell grows out of Nexus-Dashboard while Cloud sheds its UI to become registry, routes and orchestration; the shell stays at app.tnhc.dev, since the apex sits on Pages specifically to survive this machine being off."
      },
      {
        "type": "p",
        "text": "Recorded because it will resurface: hiding subdomains is not a security measure. Certificate Transparency makes them enumerable, and Google \u2014 the stated model \u2014 is not single-origin either. Coherence comes from one account, one launcher and one design language, which is what this builds."
      },
      {
        "type": "p",
        "text": "Self-review corrected a real error: Hosting was listed as one of four apps to embed, but hosting.tnhc.dev serves a 2 KB inline placeholder with no scripts and no control panel. There is nothing there to embed. The first slice embeds two apps, not four \u2014 smaller than it first appeared, and honest."
      },
      {
        "type": "p",
        "text": "Also measured, and it changes the work: all three candidate hosts send the wrong framing headers in three different directions. Chat sends X-Frame-Options: DENY and cannot be framed at all; Hosting sends frame-ancestors 'self' and blocks the shell; Draw sends nothing, so any site on the internet can frame it today. The contract tightens that rather than loosening it."
      }
    ]
  },
  {
    "slug": "one-tile-per-destination",
    "title": "One tile per destination",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "Registering nexus-draw-site to give draw.tnhc.dev a gateable route left two records pointing at one address, and the grid rendered both \u2014 the app appeared twice. A published site and the backend behind it are two registr",
    "sha": "d6ab886",
    "content": [
      {
        "type": "p",
        "text": "Registering nexus-draw-site to give draw.tnhc.dev a gateable route left two records pointing at one address, and the grid rendered both \u2014 the app appeared twice. A published site and the backend behind it are two registry records for one thing; the person looking at the grid cares about destinations, not which internal record won."
      }
    ]
  },
  {
    "slug": "close-the-hosting-bypass-and-gate-draw",
    "title": "Close the hosting bypass, and gate draw",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "routing"
    ],
    "category": "Commit",
    "excerpt": "Two of the four items left open after phase 4.",
    "sha": "50c2441",
    "content": [
      {
        "type": "p",
        "text": "Two of the four items left open after phase 4."
      },
      {
        "type": "p",
        "text": "**hosting.tnhc.dev no longer bypasses the proxy.** Its tunnel ingress pointed straight at 192.168.0.179:8788, so it reached its origin from the public internet without passing the gate \u2014 meaning nothing enforced at the proxy could ever see it. Ingress now goes to the proxy, and Cloud carries a route."
      },
      {
        "type": "p",
        "text": "Its tool record had upstreamUrl http://localhost:8080 \u2014 the proxy itself, which would have looped \u2014 which is presumably why it had never been routed that way. Corrected to :8788. It does not heartbeat, so nothing overwrites it."
      },
      {
        "type": "p",
        "text": "It is routed but deliberately **not** gated. The gate reads only the session cookie, and Hosting's deploy flow authenticates with fh_ API tokens; gating it today would 302 every CLI deploy. That is now one PATCH away, but doing it honestly needs the gate to accept API tokens as well as sessions \u2014 a feature, not a flag flip, and not something to spring on a working deploy path."
      },
      {
        "type": "p",
        "text": "**storage.tnhc.dev stays direct, on purpose.** It serves published site bytes to browsers and CLIs, which is the \"published output, not a tool\" case the launch decision explicitly does not gate. Moving it would add a hop and buy nothing until some policy wants to see it."
      },
      {
        "type": "p",
        "text": "**draw.tnhc.dev is gated.** It needed a real Cloud route \u2014 the wildcard fallback hardcodes requiresAuth false \u2014 and the route had to point at Hosting's site-proxy on :8090. The obvious target was wrong: the nexus-draw backend on :3075 404s at \"/\", so routing the host there would have taken the site down while looking like the natural choice. A separate nexus-draw-site tool owns the route so the backend's own registration cannot overwrite the upstream."
      },
      {
        "type": "p",
        "text": "Verified across every host, signed out and signed in: chat and draw 302 then 200, app/cloud/hosting unchanged at 200, auth 404 at \"/\" as always."
      },
      {
        "type": "p",
        "text": "tunnel-ingress.backup.json records the previous ingress so the move can be reversed without reconstructing it from memory."
      }
    ]
  },
  {
    "slug": "stop-labelling-decompressed-bodies-as-compressed",
    "title": "Stop labelling decompressed bodies as compressed",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "proxy"
    ],
    "category": "Commit",
    "excerpt": "\"Not signed in\" in chat, with \"request to https://chat.tnhc.dev failed: Decoding failed\" once the app was made to say why.",
    "sha": "e89363b",
    "content": [
      {
        "type": "p",
        "text": "\"Not signed in\" in chat, with \"request to https://chat.tnhc.dev failed: Decoding failed\" once the app was made to say why."
      },
      {
        "type": "p",
        "text": "Bun's fetch() honours Content-Encoding transparently and hands back plain bytes, so by the time the proxy sees a response body it is already decoded. The proxy stripped content-length and transfer-encoding but forwarded content-encoding untouched \u2014 telling the client to gunzip something that was not gzipped. The browser failed with ERR_CONTENT_DECODING_FAILED before any JavaScript could read it, which surfaced as a fetch rejection and, three layers up, as a login screen for someone already signed in."
      },
      {
        "type": "p",
        "text": "Proof, before the fix: the response carried `content-encoding: gzip` and a body beginning `{\"id\":\"c2c4271c-` \u2014 plain JSON where gzip would start 1f 8b."
      },
      {
        "type": "p",
        "text": "**This only ever broke real browsers, which is why it survived so long.** curl sends no Accept-Encoding unless asked, so upstream returned uncompressed bytes with no header and every check I ran from the command line passed \u2014 including requests carrying full browser headers, because I had not thought to add the one header that mattered. Browsers always advertise gzip. So chat could answer 200 to everything measurable here and be unusable in a browser, and the two observations never met."
      },
      {
        "type": "p",
        "text": "Header hygiene is now one tested function rather than a run of deletes in the middle of the request path, and content-length goes with content-encoding since it describes the encoded length. Cloudflare compresses at the edge and labels it truthfully, which is where that belongs."
      },
      {
        "type": "p",
        "text": "Verified end to end as a browser behaves: --compressed against the API decodes to the real user, the SPA shell decodes to its title, and every host still serves."
      },
      {
        "type": "p",
        "text": "Also fixed on the way here, both real and neither the cause: the gate took only the first of several same-named session cookies, so one stale host-scoped cookie could shadow a valid session; and the SPA now reports why sign-in failed instead of showing a bare dead end. That diagnostic is what found this."
      }
    ]
  },
  {
    "slug": "one-stale-cookie-must-not-shadow-a-valid-session",
    "title": "One stale cookie must not shadow a valid session",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "gate"
    ],
    "category": "Commit",
    "excerpt": "Reported: chat says \"Not signed in\" while cloud signs you straight in. Server side both are fine \u2014 chat's API returns 200 to a full browser-shaped request with a valid cookie \u2014 so the difference was in what the browser s",
    "sha": "92f781c",
    "content": [
      {
        "type": "p",
        "text": "Reported: chat says \"Not signed in\" while cloud signs you straight in. Server side both are fine \u2014 chat's API returns 200 to a full browser-shaped request with a valid cookie \u2014 so the difference was in what the browser sends."
      },
      {
        "type": "p",
        "text": "A browser holds same-named cookies at different scopes and sends them all, most-specific first. A nexus_session scoped host-only to chat.tnhc.dev is sent to chat and to nothing else, which is exactly the shape of the reported symptom: chat broken, cloud fine, because cloud never receives it."
      },
      {
        "type": "p",
        "text": "readCookie took the first match, so that one stale value shadowed the good ecosystem session permanently. The gate refused, redirected the app's own fetch to the sign-in host, and the page's CSP blocked following it \u2014 so the user saw a dead end on a host they were signed in to, with no way out short of clearing cookies by hand."
      },
      {
        "type": "p",
        "text": "The gate now tries every value sent under the name and accepts the first that resolves. Verified live: a dead cookie ahead of a good one now returns 200, a dead cookie alone still 302s, and three tests cover the parsing including an undecodable value among valid ones."
      }
    ]
  },
  {
    "slug": "real-crypto-everywhere-it-is-used-and-stop-showing-signed-in",
    "title": "Real crypto everywhere it is used, and stop showing signed-in people login forms",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "core"
    ],
    "category": "Commit",
    "excerpt": "Opts the remaining crypto-using service into real cryptography, removes the two surviving login forms, and fixes three faults found while doing it.",
    "sha": "9f81a0c",
    "content": [
      {
        "type": "p",
        "text": "Opts the remaining crypto-using service into real cryptography, removes the two surviving login forms, and fixes three faults found while doing it."
      },
      {
        "type": "p",
        "text": "**Phantom.** Only two deployed services actually construct a Phantom SDK: Draw and Team-Chat. Both are now verified against the native library and carry PHANTOM_REQUIRE_REAL=1, so they refuse to start on the mock rather than pretending. Setting the flag on auth, cloud or the dashboard would do nothing \u2014 they never build an SDK, so there is no fallback for it to refuse."
      },
      {
        "type": "p",
        "text": "**The chat SPA was never reaching anyone.** Its cache header was `header /index.html`, which matches the literal request path. Browsers ask for \"/\", and SPA routes ask for \"/rooms/x\"; try_files rewrites both to index.html internally, but the matcher had already seen the original path and never fired. So the shell went out with no Cache-Control at all, browsers cached it heuristically from Last-Modified, and kept serving an old shell pointing at an old content-hashed bundle \u2014 which is immutable-cached forever. Every frontend fix deployed this week was invisible to anyone who had already loaded the page, with nothing on the server to indicate it. Now keyed off \"is this a hashed asset\" rather than a path literal."
      },
      {
        "type": "p",
        "text": "**The dashboard listed itself.** A tile linking to the dashboard, shown on the dashboard, is a button that goes where you already are. It is filtered like the auth host is, and the grid builder takes the self host explicitly so the behaviour is testable rather than incidental."
      },
      {
        "type": "p",
        "text": "Cloud and Nexus-Deploy submodules carry the rest: requiresAuth now survives a restart (it was written but never read back, so a reload silently un-gated chat), and both portals stopped asking for passwords they cannot verify."
      },
      {
        "type": "p",
        "text": "Verified live: chat 302s unauthenticated and survives a Cloud restart still gated, draw reports cryptography \"real\", the grid no longer lists the dashboard, and every host still serves."
      }
    ]
  },
  {
    "slug": "real-post-quantum-crypto-for-draw-via-bun-ffi",
    "title": "Real post-quantum crypto for Draw via bun:ffi",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "phantom"
    ],
    "category": "Commit",
    "excerpt": "Draw now runs actual Kyber-1024 and Dilithium-5 instead of the stand-in, and refuses to start without them.",
    "sha": "2bc3335",
    "content": [
      {
        "type": "p",
        "text": "Draw now runs actual Kyber-1024 and Dilithium-5 instead of the stand-in, and refuses to start without them."
      },
      {
        "type": "p",
        "text": "The route in is FFI, not WASM. Every consumer of this SDK is a server-side Bun process, so a browser bundle was never what they needed \u2014 and pqcrypto's C sources cannot compile for wasm32-unknown-unknown regardless, since that target has no libc. Built natively they compile without complaint."
      },
      {
        "type": "p",
        "text": "The crypto itself was already there and already correct: IdentityStore in the wasm crate is pure Rust with the wasm_bindgen layer bolted on top. This adds a C ABI over the same store, gated so wasm and native builds each get only their own bindings, plus a Bun loader. Nothing about the cryptography changed."
      },
      {
        "type": "p",
        "text": "Values crossing the boundary are hex in NUL-terminated C strings. Slower than buffers, but identity operations are rare, and the alternative is manual lifetime rules on both sides of an FFI boundary. Every returned string is freed through phantom_free_string on every path out."
      },
      {
        "type": "p",
        "text": "phantom_verify returns three values, not two: 1 verified, 0 rejected, -1 could not be evaluated. Collapsing the third into false would make an unknown handle indistinguishable from a bad signature."
      },
      {
        "type": "p",
        "text": "One real bug found and fixed while testing: the KEM round-trip appeared to fail. The crypto was perfect \u2014 a Rust unit test proved it \u2014 but `new CString()` returns a String *object*, not a primitive. It prints and serialises identically, so it looks correct everywhere except `===`, where an object never equals a string. Now coerced with String(), and the test asserting it uses strict equality on purpose."
      },
      {
        "type": "p",
        "text": "deploy.sh builds the library before starting anything, because the artifact is gitignored and Draw now fails closed \u2014 without the build a fresh checkout would see Draw refuse to start with a message about cryptography rather than about a missing build."
      },
      {
        "type": "p",
        "text": "Draw is the only service with PHANTOM_REQUIRE_REAL=1. The other 81 still boot on the mock, loudly. Opt each in as its crypto is verified."
      },
      {
        "type": "p",
        "text": "Verified live: Draw's health endpoint reports cryptography \"real\", sdkVersion \"phantom-native/0.1.0\", a did:phantom: with no \"mock\" in it, and draw.tnhc.dev still serves. Key sizes checked against the standards \u2014 1568-byte Kyber-1024 public keys, 2592-byte Dilithium-5 \u2014 signatures verify, tampering is rejected, and the KEM round-trip agrees. 14 SDK tests, 5 Rust tests."
      }
    ]
  },
  {
    "slug": "signing-in-with-no-return-address-no-longer-looks-like-failu",
    "title": "Signing in with no return address no longer looks like failure",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "Reported as: log in, get bounced back to an empty form, no error, nothing.",
    "sha": "6dfb427",
    "content": [
      {
        "type": "p",
        "text": "Reported as: log in, get bounced back to an empty form, no error, nothing."
      },
      {
        "type": "p",
        "text": "The sign-in was succeeding every time. POST /login set the session cookie and then redirected to `target ?? \"/login\"` \u2014 and anyone who visits the sign-in page directly has no target, so they were sent back to /login. GET /login only skipped the form when there was both a session and a return address, so it rendered the empty form to someone who had just successfully authenticated. No error, because nothing had gone wrong. It just looked exactly like silent failure, which is worse than an error message."
      },
      {
        "type": "p",
        "text": "A sign-in that names no destination now goes to the dashboard \u2014 the front door, which lists everything the account can reach \u2014 and an already-signed-in visitor is redirected rather than shown a password box. NEXUS_POST_LOGIN_URL overrides."
      },
      {
        "type": "p",
        "text": "Three tests, including one pinning that the default destination cannot resolve back to /login, since that is precisely what caused this."
      }
    ]
  },
  {
    "slug": "stop-the-sdk-claiming-cryptography-it-is-not-doing",
    "title": "Stop the SDK claiming cryptography it is not doing",
    "date": "2026-08-13",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "phantom"
    ],
    "category": "Commit",
    "excerpt": "82 server files import this SDK and every one was running a stand-in, with no way to tell. loadWasm() threw unconditionally, so the real path was unreachable even after building; a bare catch swallowed it and returned cr",
    "sha": "b3ea571",
    "content": [
      {
        "type": "p",
        "text": "82 server files import this SDK and every one was running a stand-in, with no way to tell. loadWasm() threw unconditionally, so the real path was unreachable even after building; a bare catch swallowed it and returned createMockSDK(), which hands back did:phantom:mock: DIDs, \"ab\".repeat(800) as a Kyber-1024 key and signatures that are the message repeated. status() reported the real algorithm names regardless, so health endpoints across the ecosystem asserted post-quantum protection that did not exist."
      },
      {
        "type": "p",
        "text": "Open and silent is the worst failure mode available: counterfeit crypto substituted for real crypto while every caller reports success. Absence would have been safer, because absence is visible."
      },
      {
        "type": "p",
        "text": "Now loadWasm() actually tries; the fallback prints an unmissable banner with the reason; status() reports cryptography \"mock\" and algorithms \"none (mock)\"; the boot line says the identity is not cryptographically real; isMock lets any caller ask; and PHANTOM_REQUIRE_REAL=1 refuses to start on the mock."
      },
      {
        "type": "p",
        "text": "That switch is off by default on purpose \u2014 82 services call this at boot, and defaulting it on would take the ecosystem down rather than secure it."
      },
      {
        "type": "p",
        "text": "Also fixes one of two reasons the module never built: getrandom 0.3 picks its backend by cfg, not feature. The existing config had --cfg=wasm_js (not that flag) under [build] (applying to native compiles too); now correctly named and scoped to the wasm target. The second reason is documented, not fixed: pqcrypto-internals compiles C including <stdlib.h> and wasm32-unknown-unknown has no libc \u2014 and the browser was the wrong target anyway, since all 82 consumers are server-side Bun."
      },
      {
        "type": "p",
        "text": "The spec doc records what Phantom is, what it cannot be, the two viable paths to real crypto, and why the proxy should not enforce phantomProtectionLevel until something is behind it."
      },
      {
        "type": "p",
        "text": "10 SDK tests pass; verified against a real Nexus-Draw boot."
      }
    ]
  },
  {
    "slug": "desktop-admin-and-mobile-on-ecosystem-sso",
    "title": "Desktop, admin and mobile on ecosystem SSO",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "clients"
    ],
    "category": "Commit",
    "excerpt": "Points the submodule at the last three clients still calling chat's deleted login. Admin gets the browser treatment (no form, ask the server); desktop and mobile sign in to Auth and present the session as a cookie, since",
    "sha": "f40ab9a",
    "content": [
      {
        "type": "p",
        "text": "Points the submodule at the last three clients still calling chat's deleted login. Admin gets the browser treatment (no form, ask the server); desktop and mobile sign in to Auth and present the session as a cookie, since neither sits behind the proxy and neither can receive an injected identity header."
      }
    ]
  },
  {
    "slug": "relay-websockets-so-chat-updates-live-again",
    "title": "Relay WebSockets, so chat updates live again",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "proxy"
    ],
    "category": "Commit",
    "excerpt": "Realtime never worked through the public hostname. Two independent breaks, one in each hop, and neither was an authentication problem.",
    "sha": "44ddcc6",
    "content": [
      {
        "type": "p",
        "text": "Realtime never worked through the public hostname. Two independent breaks, one in each hop, and neither was an authentication problem."
      },
      {
        "type": "p",
        "text": "Caddy was told to forward the upgrade by hand:"
      },
      {
        "type": "h",
        "text": "header_up Connection {>Connection} header_up Upgrade {>Upgrade}"
      },
      {
        "type": "p",
        "text": "That is a Caddy v1 idiom. v2 detects a WebSocket and manages the hop-by-hop headers itself, and setting them explicitly fought that logic \u2014 the backend received no Connection: Upgrade at all and answered \"Connection header did not include 'upgrade'\". A 400 that reads like an auth failure but happens before auth is consulted; it returned the same with or without a valid identity, which is what gave it away. Removing both lines fixes it. /voice/ws also needed a rewrite to /voice, which is where the voice server actually routes."
      },
      {
        "type": "p",
        "text": "The ecosystem proxy could not upgrade at all. It forwards with fetch(), which has no handshake, and stripped `upgrade` from the response for good measure. It now detects an upgrade *after* the gate has run, hands it to Bun, and pumps frames between the browser socket and an upstream one."
      },
      {
        "type": "p",
        "text": "Three things that had to be right:"
      },
      {
        "type": "p",
        "text": "- The gate runs first, so a gated host still demands a session and the identity token it mints rides to the upstream on the outbound socket. That token is the only way the app can know who is on the far end. Verified: an unauthenticated socket is refused, and a client-supplied x-nexus-identity is refused too \u2014 the proxy asserts identity, it does not relay a claim. - Frames arriving before the upstream finishes connecting are buffered rather than dropped. The first frame a client sends here is Identify, so losing it would hang the session waiting for a READY that never comes. - Connection detection accepts a comma-separated list. Browsers send \"keep-alive, Upgrade\"; an equality check would pass a hand-rolled curl and fail every real browser, which is the worst way to be wrong. Tested."
      },
      {
        "type": "p",
        "text": "Links live in a WeakMap keyed by the server socket, so a long-running proxy cannot accumulate dead entries."
      },
      {
        "type": "p",
        "text": "Verified end to end with a cookie and nothing else, exactly as a browser does it: handshake through the proxy, Hello, Identify, Ready as founder, frames flowing. 31 proxy tests green, every host still serving."
      }
    ]
  },
  {
    "slug": "chat-client-talks-to-its-own-origin-not-a-stale-stored-one",
    "title": "Chat client talks to its own origin, not a stale stored one",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "web"
    ],
    "category": "Commit",
    "excerpt": "Points the submodule at the fix for \"Not signed in\" after a successful ecosystem sign-in: a pre-cutover nexus_server_url in localStorage sent the bootstrap to the wrong origin, and the Sign in button reloaded into the sa",
    "sha": "d7cf4de",
    "content": [
      {
        "type": "p",
        "text": "Points the submodule at the fix for \"Not signed in\" after a successful ecosystem sign-in: a pre-cutover nexus_server_url in localStorage sent the bootstrap to the wrong origin, and the Sign in button reloaded into the same dead end instead of going to Auth."
      }
    ]
  },
  {
    "slug": "the-front-door-is-applied-and-redirects-goes-in-public",
    "title": "The front door is applied, and _redirects goes in public/",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "pages"
    ],
    "category": "Commit",
    "excerpt": "Corrects a real error in this README: it said to put _redirects in build/ for Create React App. build/ is generated output and is not committed, so the next build would silently drop the file \u2014 and a missing _redirects f",
    "sha": "a4dafc8",
    "content": [
      {
        "type": "p",
        "text": "Corrects a real error in this README: it said to put _redirects in build/ for Create React App. build/ is generated output and is not committed, so the next build would silently drop the file \u2014 and a missing _redirects fails silently at the edge too, which is the worst pair of properties to combine. It belongs in public/, which both CRA and Vite copy verbatim into the published output."
      },
      {
        "type": "p",
        "text": "Also records where the site actually lives \u2014 github.com/The-No-Hands-company/ tnhc.dev \u2014 and that both pieces are now applied there in commit dccb28c, so these files are reference copies rather than pending work."
      }
    ]
  },
  {
    "slug": "keep-the-return-address-at-sign-in-and-give-the-apex-a-front",
    "title": "Keep the return address at sign-in, and give the apex a front door",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "Two halves of one problem: people arriving at tnhc.dev had no way in, and the way in that did exist forgot where they were going.",
    "sha": "5044ad8",
    "content": [
      {
        "type": "p",
        "text": "Two halves of one problem: people arriving at tnhc.dev had no way in, and the way in that did exist forgot where they were going."
      },
      {
        "type": "p",
        "text": "The sign-in page read `redirect` from the query string. Every caller in the ecosystem sends `redirect_uri` \u2014 the proxy's login gate and the dashboard's sign-in button both do \u2014 so the return address was dropped in silence and everyone landed back on /login after authenticating. To the person signing in that is indistinguishable from sign-in not working. It now reads both, which fixes every existing link without touching any of them."
      },
      {
        "type": "p",
        "text": "This is the same failure as the gate's publicUrl bug, one hop later: the address survives the redirect and dies at the page it was handed to. Both were found by walking the path rather than reading it."
      },
      {
        "type": "p",
        "text": "Six tests, including that an off-domain or lookalike return address is refused in either spelling \u2014 safeRedirect already did this, and now it stays done. They set NEXUS_AUTH_COOKIE_DOMAIN because without it safeRedirect rejects every absolute address, and the tests would have passed for entirely the wrong reason."
      },
      {
        "type": "p",
        "text": "deploy/cloudflare-pages/ carries what the marketing site needs. The apex is a static Pages site whose source is not in this repo and which never reaches the tunnel \u2014 deliberately, since it stays up when this machine does not. So it cannot host a login form, and its job is to point at the hosts that can: _redirects maps /login, /signup, /register and /claim to the real pages, and header-cta.html is the two buttons, because a redirect only helps someone who already guessed a URL."
      },
      {
        "type": "p",
        "text": "Registration stays invite-only, as chosen: request, approve, claim."
      },
      {
        "type": "p",
        "text": "Verified live: a signed-out deep link to chat.tnhc.dev/rooms/general now redirects to sign-in carrying that exact address, and the form holds onto it."
      }
    ]
  },
  {
    "slug": "harden-the-login-gate-and-switch-it-on-for-chat",
    "title": "Harden the login gate, and switch it on for chat",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "gate"
    ],
    "category": "Commit",
    "excerpt": "SSO phase 4, task 6 \u2014 the task that actually changes who can reach what. chat.tnhc.dev now requires an ecosystem sign-in.",
    "sha": "d225219",
    "content": [
      {
        "type": "p",
        "text": "SSO phase 4, task 6 \u2014 the task that actually changes who can reach what. chat.tnhc.dev now requires an ecosystem sign-in."
      },
      {
        "type": "p",
        "text": "The review this task asks for found three defects, all on the path every gated request takes:"
      },
      {
        "type": "p",
        "text": "A malformed cookie returned 500. decodeURIComponent throws on an escape like \"%zz\", readCookie did not catch it, and gate() runs outside the proxy's try \u2014 so one header crashed the gate for anyone who sent it. Confirmed live before the fix, 302 after. A cookie we cannot decode is simply not a session."
      },
      {
        "type": "p",
        "text": "The stale-cache window outlived the tokens in it. STALE_MS was 15 minutes against a token Auth mints for 120 seconds, so all but the first two minutes of that window handed out tokens the app is guaranteed to reject as expired \u2014 worse than a clean redirect. Now 100s. Riding out a longer outage needs a longer token TTL, which is a different trade: a longer-lived token is a longer-lived thing to steal."
      },
      {
        "type": "p",
        "text": "The identity cache was never pruned. Not attacker-growable, since entries are only written for sessions Auth accepted, but every (session, host) pair a real user ever visited stayed for the life of the process. Swept on write."
      },
      {
        "type": "p",
        "text": "What held up under it: a forged X-Nexus-Identity is refused twice \u2014 the proxy strips any inbound value before forwarding, and the app rejects the signature independently; both verified. The AUTH_HOST allowlist is structural, so no route row can make signing in require being signed in. Every Nexus port refuses from this host's LAN address; only the four documented exceptions listen wide."
      },
      {
        "type": "p",
        "text": "Walked the whole path with a real new account, since created and removed: request access, refused a login while pending, operator approved, weak password refused at claim, claimed, signed in, opened Chat \u2014 which recognised them and provisioned their row with no Chat account ever existing."
      },
      {
        "type": "p",
        "text": "Rollback is one PATCH setting requiresAuth false, picked up within the proxy's 60s poll, and is written down in the plan rather than worked out under pressure."
      },
      {
        "type": "p",
        "text": "Also corrects an earlier note in the plan: the hosting/storage tunnel bypass blocks gating the rest of the ecosystem, not this task, which gates chat alone."
      }
    ]
  },
  {
    "slug": "ecosystem-sso-cutover-phase-4-task-4",
    "title": "Ecosystem SSO cutover (phase 4, task 4)",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "chat"
    ],
    "category": "Commit",
    "excerpt": "Points the submodule at the login deletion: chat's own /auth/login, /auth/register, /auth/refresh, 2FA and password reset are gone, the REST API and both WebSocket servers authenticate from the proxy's identity header, a",
    "sha": "3d555ac",
    "content": [
      {
        "type": "p",
        "text": "Points the submodule at the login deletion: chat's own /auth/login, /auth/register, /auth/refresh, 2FA and password reset are gone, the REST API and both WebSocket servers authenticate from the proxy's identity header, and the web client no longer shows a login form."
      },
      {
        "type": "p",
        "text": "chat.tnhc.dev is now gated \u2014 the first host in the ecosystem to require an ecosystem sign-in."
      },
      {
        "type": "p",
        "text": "Also records the task 4 outcome in the plan: WebSockets cannot traverse the public hostname, which predates this work and is a transport problem rather than an authentication one."
      }
    ]
  },
  {
    "slug": "keep-the-return-address-when-sending-someone-to-sign-in",
    "title": "Keep the return address when sending someone to sign in",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "gate"
    ],
    "category": "Commit",
    "excerpt": "Found end-to-end, not by a unit test. `gate()` built its login redirect from `req.url`, which at this proxy is always http:// \u2014 Cloudflare terminates TLS at the edge and the tunnel hands us plain HTTP. isRedirectAllowed ",
    "sha": "8715559",
    "content": [
      {
        "type": "p",
        "text": "Found end-to-end, not by a unit test. `gate()` built its login redirect from `req.url`, which at this proxy is always http:// \u2014 Cloudflare terminates TLS at the edge and the tunnel hands us plain HTTP. isRedirectAllowed requires https, so it rejected every single return address and fell back to the apex. A user following a deep link into a gated app would sign in and land on the marketing site, with no way back to where they were going."
      },
      {
        "type": "p",
        "text": "publicUrl() rebuilds what the browser actually asked for: https, no tunnel port, host and path intact. The scheme was never the security property \u2014 the host is, and it is still checked, with an explicit test that an off-domain host is refused after the rewrite."
      },
      {
        "type": "p",
        "text": "Also carries the Cloud submodule bump that gives the gate a switch to read."
      },
      {
        "type": "p",
        "text": "Verified live against a scratch gated route: no session gets 302 to auth.tnhc.dev with redirect_uri=https://echo.tnhc.dev/probe, and a real session is forwarded upstream carrying X-Nexus-Identity."
      }
    ]
  },
  {
    "slug": "ecosystem-identity-middleware-and-provisioning-sso-phase-4-t",
    "title": "Ecosystem identity middleware and provisioning (SSO phase 4, task 3)",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "chat"
    ],
    "category": "Commit",
    "excerpt": "Points the submodule at the identity middleware: Chat can verify the header the proxy forwards, provision a local user row for the ecosystem account behind it, and populate AuthContext from it. Not wired into the router ",
    "sha": "75afe95",
    "content": [
      {
        "type": "p",
        "text": "Points the submodule at the identity middleware: Chat can verify the header the proxy forwards, provision a local user row for the ecosystem account behind it, and populate AuthContext from it. Not wired into the router yet \u2014 task 4 flips the routes and deletes the local login."
      }
    ]
  },
  {
    "slug": "identity-token-verification-sso-phase-4-task-2",
    "title": "Identity token verification (SSO phase 4, task 2)",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "chat"
    ],
    "category": "Commit",
    "excerpt": "Points the submodule at the JwksCache work: Chat can now verify the X-Nexus-Identity token the proxy forwards, against Auth's published JWKS. Verification only \u2014 nothing reads the header yet; the middleware that acts on ",
    "sha": "a199e43",
    "content": [
      {
        "type": "p",
        "text": "Points the submodule at the JwksCache work: Chat can now verify the X-Nexus-Identity token the proxy forwards, against Auth's published JWKS. Verification only \u2014 nothing reads the header yet; the middleware that acts on it is task 3."
      }
    ]
  },
  {
    "slug": "bind-every-service-to-loopback-so-the-proxy-is-the-only-way",
    "title": "Bind every service to loopback so the proxy is the only way in",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "security"
    ],
    "category": "Commit",
    "excerpt": "SSO phase 4, task 1. The login gate lives in the proxy, so it is worth exactly as much as the proxy being the sole route in \u2014 and it was not. nexus-chat hardcoded 0.0.0.0 for its API, gateway and voice ports, and every B",
    "sha": "4a563c1",
    "content": [
      {
        "type": "p",
        "text": "SSO phase 4, task 1. The login gate lives in the proxy, so it is worth exactly as much as the proxy being the sole route in \u2014 and it was not. nexus-chat hardcoded 0.0.0.0 for its API, gateway and voice ports, and every Bun service bound all interfaces too, because Bun.serve does that when hostname is omitted. Auth (4310), Cloud (8787), Dashboard (3132), Draw (3075), Team-Chat (3109) and Chat's Caddy front door (8095) were all reachable from the LAN with no authentication at all."
      },
      {
        "type": "p",
        "text": "All of them now bind 127.0.0.1, overridable with NEXUS_BIND_HOST. The proxy keeps binding wide, now deliberately and with the reason written down: cloudflared runs on a bridge network and reaches it by LAN address."
      },
      {
        "type": "p",
        "text": "Verified from this host's own LAN address \u2014 every backend refuses, only 8080 answers \u2014 and all six public hosts still serve 200 through the edge."
      },
      {
        "type": "p",
        "text": "Caddy needed the `bind` directive rather than a 127.0.0.1:8095 site address. A site address in Caddy is also a host matcher, so that form answered real traffic with 400; verification caught it, review had not."
      },
      {
        "type": "p",
        "text": "The audit also turned up something that blocks task 6, recorded in the plan: hosting.tnhc.dev and storage.tnhc.dev are routed by the tunnel straight to their origins, bypassing the proxy from the public internet. Flipping requiresAuth would lock everything except Hosting's control plane."
      }
    ]
  },
  {
    "slug": "run-the-draw-backend-and-stop-nexus-chat-s-env-from-leaking",
    "title": "Run the Draw backend, and stop nexus-chat's env from leaking",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "deploy"
    ],
    "category": "Commit",
    "excerpt": "Two faults, both surfacing as a wrong app grid on app.tnhc.dev.",
    "sha": "4a3e331",
    "content": [
      {
        "type": "p",
        "text": "Two faults, both surfacing as a wrong app grid on app.tnhc.dev."
      },
      {
        "type": "p",
        "text": "Draw showed \"Unavailable\" while draw.tnhc.dev served fine. The SPA is a static site on Hosting and works standalone, so nothing broke visibly when its backend stopped being started \u2014 but Cloud's health comes from a process heartbeat, and with no process there was no heartbeat. Draw is now started by the deployer with the Cloud API key it needs to register."
      },
      {
        "type": "p",
        "text": "Fixing that revealed the worse one: the dashboard was announcing itself to Cloud as chat.tnhc.dev, so its own tile linked to Chat. nexus-chat.env is sourced under `set -a`, which exported PUBLIC_URL and NEXUS__SERVER__NAME into the deploy shell and from there into every service started afterwards. It is now sourced in a subshell, and the dashboard reads a name it owns rather than the generic PUBLIC_URL."
      }
    ]
  },
  {
    "slug": "implementation-plan-for-sso-phase-4-integration-and-hardenin",
    "title": "Implementation plan for SSO phase 4 (integration and hardening)",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "Six tasks: rebind to loopback, a JWKS client verifying Auth's RS256 identity tokens, identity middleware with first-sight provisioning, deletion of nexus-chat's own login, secret rotation, then the security review and th",
    "sha": "b6cf5d8",
    "content": [
      {
        "type": "p",
        "text": "Six tasks: rebind to loopback, a JWKS client verifying Auth's RS256 identity tokens, identity middleware with first-sight provisioning, deletion of nexus-chat's own login, secret rotation, then the security review and the gate switch-on."
      },
      {
        "type": "p",
        "text": "Order is load-bearing and the plan says why. Ports close before the gate is trusted, and identity must work before the local login is deleted \u2014 reversing either leaves a window with no way in at all. Nothing before task 6 changes who can reach what."
      },
      {
        "type": "p",
        "text": "Grounded in the running system rather than the spec: Auth's JWKS is RSA/RS256 with kid/n/e, jsonwebtoken 9.3 is already a workspace dependency and supports RS256, nothing verifies RS256 in nexus-chat yet, its ports are hardcoded to 0.0.0.0 at nexus-server/src/main.rs:373, and its user table is still empty so provisioning needs no migration."
      },
      {
        "type": "p",
        "text": "Two checks called out because omitting either is silently fatal: `aud`, without which a token minted for one app is replayable against another; and `typ`, because Auth signs service tokens with the same key and only that claim separates them."
      }
    ]
  },
  {
    "slug": "heartbeat-to-cloud-and-make-deploy-sh-idempotent",
    "title": "Heartbeat to Cloud, and make deploy.sh idempotent",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "Two things that stopped app.tnhc.dev from ever routing.",
    "sha": "77fa167",
    "content": [
      {
        "type": "p",
        "text": "Two things that stopped app.tnhc.dev from ever routing."
      },
      {
        "type": "p",
        "text": "The dashboard never told Cloud it was alive. Task 2 deleted the ghost cloud.ts as unreferenced scaffolding without noticing it carried the heartbeat, so Cloud marked the tool offline, and Guardian refuses to expose an offline tool \u2014 the address for app.tnhc.dev sat at \"requested\" and never became a route, no matter how healthy the process actually was. Restored as a real heartbeat: announce on start, then every 30s, best-effort so an unreachable Cloud never stops the dashboard serving."
      },
      {
        "type": "p",
        "text": "deploy.sh aborted entirely on the first already-running service. check_port returned non-zero into `set -e`, so `deploy.sh bg` could not fill in missing services after a partial outage \u2014 precisely when it is needed, and the reason the dashboard never started on the first attempt. An occupied port is now logged and skipped as success."
      },
      {
        "type": "h",
        "text": "(cherry picked from commit 02117333d534826b300dae1081a212ebee9009ba)"
      }
    ]
  },
  {
    "slug": "heartbeat-to-cloud-and-make-deploy-sh-idempotent-0211733",
    "title": "Heartbeat to Cloud, and make deploy.sh idempotent",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "Two things that stopped app.tnhc.dev from ever routing.",
    "sha": "0211733",
    "content": [
      {
        "type": "p",
        "text": "Two things that stopped app.tnhc.dev from ever routing."
      },
      {
        "type": "p",
        "text": "The dashboard never told Cloud it was alive. Task 2 deleted the ghost cloud.ts as unreferenced scaffolding without noticing it carried the heartbeat, so Cloud marked the tool offline, and Guardian refuses to expose an offline tool \u2014 the address for app.tnhc.dev sat at \"requested\" and never became a route, no matter how healthy the process actually was. Restored as a real heartbeat: announce on start, then every 30s, best-effort so an unreachable Cloud never stops the dashboard serving."
      },
      {
        "type": "p",
        "text": "deploy.sh aborted entirely on the first already-running service. check_port returned non-zero into `set -e`, so `deploy.sh bg` could not fill in missing services after a partial outage \u2014 precisely when it is needed, and the reason the dashboard never started on the first attempt. An occupied port is now logged and skipped as success."
      }
    ]
  },
  {
    "slug": "bring-the-dashboard-up-at-app-tnhc-dev",
    "title": "Bring the dashboard up at app.tnhc.dev",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "deploy"
    ],
    "category": "Commit",
    "excerpt": "Starts Nexus-Dashboard on 3132 and adds it to the stop, status and health loops. The health probe is /health on the dashboard itself, which is the origin app.$DOMAIN actually reaches.",
    "sha": "9b0f8b6",
    "content": [
      {
        "type": "p",
        "text": "Starts Nexus-Dashboard on 3132 and adds it to the stop, status and health loops. The health probe is /health on the dashboard itself, which is the origin app.$DOMAIN actually reaches."
      },
      {
        "type": "p",
        "text": "The host is public on purpose: it carries request-access and claim, which people who are not signed in must be able to reach. Gating it would deadlock exactly as gating auth.$DOMAIN would. NEXUS_AUTH_INTERNAL_URL is an address this machine can reach and never a public URL \u2014 pointing it at the public host would send the request back out through Cloudflare and into this proxy again, the same trap NEXUS_AUTH_BASE_URL documents above it."
      },
      {
        "type": "p",
        "text": "Skipped with an actionable warning when frontend/dist is absent, so a checkout that has not run `npm run build` still brings up every other service instead of failing the whole deploy."
      }
    ]
  },
  {
    "slug": "operator-admin-panel",
    "title": "Operator admin panel",
    "date": "2026-08-12",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "Seven tests. The approval queue and invite minting \u2014 what makes invite-only operable at all, since without it approving someone means editing a JSON store by hand.",
    "sha": "20bd6e0",
    "content": [
      {
        "type": "p",
        "text": "Seven tests. The approval queue and invite minting \u2014 what makes invite-only operable at all, since without it approving someone means editing a JSON store by hand."
      },
      {
        "type": "p",
        "text": "A request is only dropped from the queue once the server has agreed. Removing it optimistically would tell the operator someone was approved when they were not, and that person could never claim their account; a test drives the 409 path to hold that."
      },
      {
        "type": "p",
        "text": "Hiding the panel from non-admins is presentation only, and the comment says so \u2014 every endpoint it calls is guarded by users:approve or users:create server-side, which is what actually enforces the boundary."
      },
      {
        "type": "p",
        "text": "The queue states plainly that approving notifies nobody: there is no outbound email, and the person returns to /claim with the code they were given when they asked. An operator who assumes a notification went out is the most likely way this flow strands someone."
      }
    ]
  },
  {
    "slug": "account-page-password-recovery-codes-sessions",
    "title": "Account page \u2014 password, recovery codes, sessions",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "Nine tests. Everything on this page is self-service and scoped to the caller: their password, their codes, their sessions. There is deliberately no way to act on another account from here.",
    "sha": "5bdbd60",
    "content": [
      {
        "type": "p",
        "text": "Nine tests. Everything on this page is self-service and scoped to the caller: their password, their codes, their sessions. There is deliberately no way to act on another account from here."
      },
      {
        "type": "p",
        "text": "Regenerating recovery codes reuses the same gate as first claim \u2014 the new set is shown once behind an \"I have saved these\" confirmation \u2014 because it retires the previous set immediately. Someone who regenerates and closes the tab has locked themselves out of their own recovery path."
      },
      {
        "type": "p",
        "text": "A failed session revoke leaves the row in place rather than optimistically removing it: showing a session as gone while the server still honours it is worse than showing the failure."
      },
      {
        "type": "p",
        "text": "Password errors are translated to the actual rule (\"at least 12 characters\") rather than echoing weak_password at the user."
      }
    ]
  },
  {
    "slug": "let-users-change-their-own-password-and-enforce-the-length-r",
    "title": "Let users change their own password, and enforce the length rule",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "Two real holes, found while building the account page against these routes.",
    "sha": "5e0652e",
    "content": [
      {
        "type": "p",
        "text": "Two real holes, found while building the account page against these routes."
      },
      {
        "type": "p",
        "text": "Changing a password required users:update, which only founder and admin hold. So an ordinary user could not change their own password, while an admin could change anyone's \u2014 precisely backwards. It is self-service when the caller is the target; the current password is what authorises it, and that was already required. An admin acting on someone else still needs users:update."
      },
      {
        "type": "p",
        "text": "changePassword also never checked length, so the 12-character minimum enforced at claim time was trivially bypassable: claim with a strong password, then immediately change it to one character. Now enforced on both paths."
      },
      {
        "type": "p",
        "text": "Adds the two recovery-code endpoints the account page needs: remaining count, and regenerate. Both are scoped to the caller's own account with no admin path \u2014 recovery codes bypass the password, so an admin route here would be a backdoor. Regenerating replaces the set wholesale, so a leaked old code stops working; a test pins that."
      }
    ]
  },
  {
    "slug": "app-grid-and-a-root-route-that-knows-who-you-are",
    "title": "App grid, and a root route that knows who you are",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "Ten tests across the grid and the root route.",
    "sha": "e88329b",
    "content": [
      {
        "type": "p",
        "text": "Ten tests across the grid and the root route."
      },
      {
        "type": "p",
        "text": "The grid renders one tile per reachable app, from Cloud's registry via the dashboard server \u2014 never a hardcoded list. Clicking through arrives already signed in, because the session cookie is scoped to the parent domain and travels to every subdomain; that is the entire point of the grid."
      },
      {
        "type": "p",
        "text": "Three distinctions the tests hold, each of which would otherwise collapse into a worse experience:"
      },
      {
        "type": "p",
        "text": "- An offline app is rendered as a plain element, not a link. Offering a click that goes nowhere is worse than a tile that says Unavailable. - An empty grid and a failed load say different things. \"You have no apps\" and \"we could not ask\" are different facts, and showing the first when the second is true makes a broken node look like an empty ecosystem. - Signed out, the root route never renders the grid \u2014 it offers Sign in, Request access and Claim instead. This host stays public precisely so a stranger can reach that; gating it would leave nowhere to ask from."
      },
      {
        "type": "p",
        "text": "The Sign in link carries redirect_uri back to this origin, which the Phase 2 gate validates against the domain before honouring."
      },
      {
        "type": "p",
        "text": "Verified live against the real registry: chat and cloud appear, auth is excluded. Draw is still missing because it has no tool record \u2014 Task 7 registers it rather than special-casing it here."
      }
    ]
  },
  {
    "slug": "request-access-and-claim-pages",
    "title": "Request-access and claim pages",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "The SPA scaffold (Vite + React + Tailwind + vitest, mirroring Nexus-Draw's frontend) plus the two public pages, behind 11 tests.",
    "sha": "7cca4ee",
    "content": [
      {
        "type": "p",
        "text": "The SPA scaffold (Vite + React + Tailwind + vitest, mirroring Nexus-Draw's frontend) plus the two public pages, behind 11 tests."
      },
      {
        "type": "p",
        "text": "Every API path in api.ts is relative. The dashboard server proxies /api/v1/auth/* onto this origin, so the browser never makes a cross-origin request; hardcoding https://auth.<domain> would work in a curl and fail in a browser for reasons that look like a login bug. A test asserts the request goes to the relative path so that cannot regress."
      },
      {
        "type": "p",
        "text": "Both pages exist because two secrets are shown exactly once and can never be retrieved again \u2014 there is no email to resend them in:"
      },
      {
        "type": "p",
        "text": "- Request access renders the claim code with an explicit \"this is the only time it is shown\". - Claim renders the ten recovery codes and gates Continue behind an \"I have saved these\" checkbox, stating plainly that losing both the password and the codes means the account cannot be recovered by anyone, operator included. Someone who clicks past that by reflex loses their account."
      },
      {
        "type": "p",
        "text": "Server error reasons are translated to plain language, deliberately preserving one ambiguity: invalid_code says \"not recognised as an approved request\" rather than distinguishing a wrong code from an unknown email, because the server returns the same answer on purpose \u2014 telling them apart would let the endpoint be used to discover which addresses have been approved."
      },
      {
        "type": "p",
        "text": "A thrown fetch is reported as a network failure rather than a server refusal, so an unreachable node does not look like a rejected code."
      }
    ]
  },
  {
    "slug": "explain-an-unbuilt-spa-instead-of-serving-nothing",
    "title": "Explain an unbuilt SPA instead of serving nothing",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "frontend/dist is a gitignored build artifact, so a fresh clone \u2014 or a deploy that skipped `npm run build` \u2014 has no index.html to serve. The previous code handed Bun.file() a missing path and the test depended on an untra",
    "sha": "84485e1",
    "content": [
      {
        "type": "p",
        "text": "frontend/dist is a gitignored build artifact, so a fresh clone \u2014 or a deploy that skipped `npm run build` \u2014 has no index.html to serve. The previous code handed Bun.file() a missing path and the test depended on an untracked artifact, so it would have failed on any clean checkout."
      },
      {
        "type": "p",
        "text": "A missing shell now returns 503 with the one command that fixes it, and the test accepts either the built shell or that message. Verified by moving dist aside and re-running: 17 pass with it present, 17 with it absent."
      }
    ]
  },
  {
    "slug": "serve-the-spa-and-proxy-auth-onto-one-origin",
    "title": "Serve the SPA and proxy auth onto one origin",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "The session cookie is parent-domain scoped, but a credentialed cross-origin call from app.<domain> to auth.<domain> still needs CORS with explicit origins and Allow-Credentials \u2014 easy to get subtly wrong, and it fails in",
    "sha": "6bbe11e",
    "content": [
      {
        "type": "p",
        "text": "The session cookie is parent-domain scoped, but a credentialed cross-origin call from app.<domain> to auth.<domain> still needs CORS with explicit origins and Allow-Credentials \u2014 easy to get subtly wrong, and it fails in ways that look like a login bug rather than a CORS bug. Proxying /api/v1/auth/* through this server makes every auth call same-origin and sidesteps it."
      },
      {
        "type": "p",
        "text": "Only that one prefix is proxied. Anything broader would make this public host an open relay into the private network, and a test pins that shut. Set-Cookie is passed back verbatim, without which login would appear to succeed while leaving the user signed out. An unknown /api path 404s as JSON rather than falling through to the SPA shell \u2014 returning HTML to a mistyped API call is how a caller ends up parsing \"<!doctype html>\" as JSON."
      },
      {
        "type": "p",
        "text": "Cloud being unreachable degrades to an empty grid, not a broken dashboard."
      },
      {
        "type": "p",
        "text": "Also clears the ghost scaffold: cloud.ts, contracts.ts and dashboard-engine.ts were unreferenced, and index.ts imported a createServer() that no longer exists. It is rewritten around startServer() and keeps the SIGTERM/SIGINT handling, which is what makes `deploy.sh stop` a clean stop rather than a kill. The test script is scoped to tests/ ahead of Task 3 adding a vitest frontend, so the two runners cannot collide."
      }
    ]
  },
  {
    "slug": "mark-the-pre-commit-secret-scanner-executable-in-the-index",
    "title": "Mark the pre-commit secret scanner executable in the index",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "core"
    ],
    "category": "Commit",
    "excerpt": "Git has been skipping it on every commit \u2014 \".githooks/pre-commit was ignored because it's not set as executable\" \u2014 so the secret scanner has been inert.",
    "sha": "7988600",
    "content": [
      {
        "type": "p",
        "text": "Git has been skipping it on every commit \u2014 \".githooks/pre-commit was ignored because it's not set as executable\" \u2014 so the secret scanner has been inert."
      },
      {
        "type": "p",
        "text": "The file is already rwxrwxrwx on disk, but this repo lives on an NTFS (fuseblk) volume where every file reports 777, so core.fileMode is false and git reads the mode from the index instead. The index recorded 100644. A plain chmod +x therefore does nothing; the bit has to be set with `git update-index --chmod=+x`, which is what this commit records \u2014 and being in the index, it fixes the hook for every clone rather than just this one."
      }
    ]
  },
  {
    "slug": "build-the-app-grid-from-cloud-s-registry",
    "title": "Build the app grid from Cloud's registry",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "dashboard"
    ],
    "category": "Commit",
    "excerpt": "Only tools with a public URL become tiles. 82 of the 85 registered tools are empty scaffolds with no reachable address, and a tile that cannot be clicked is worse than no tile. The auth host is excluded too: it is where ",
    "sha": "eef8959",
    "content": [
      {
        "type": "p",
        "text": "Only tools with a public URL become tiles. 82 of the 85 registered tools are empty scaffolds with no reachable address, and a tile that cannot be clicked is worse than no tile. The auth host is excluded too: it is where you sign in, not an app you open, so a tile pointing at the login page is a dead end for someone already signed in."
      },
      {
        "type": "p",
        "text": "Health is carried through \u2014 anything not explicitly \"healthy\" is treated as offline, so an unexpected value fails safe and the tile renders unlinked rather than inviting a click that goes nowhere. Entries are sorted by name so the grid does not reshuffle between polls."
      },
      {
        "type": "p",
        "text": "A malformed or missing payload yields an empty grid rather than throwing: Cloud is a separate service that can be mid-restart, and that should cost the user their app list, not the whole dashboard."
      },
      {
        "type": "p",
        "text": "Note: tests/server.test.ts has one pre-existing failure \u2014 the ghost scaffold's /health never returned the `phantom` field its own test asserts. Task 2 rewrites both."
      }
    ]
  },
  {
    "slug": "implementation-plan-for-sso-phase-3-the-dashboard",
    "title": "Implementation plan for SSO phase 3 (the dashboard)",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "Seven tasks building app.tnhc.dev: grid entries from Cloud's registry, a Bun server that serves the SPA and proxies auth same-origin, the public request-access and claim pages, the app grid, account and admin surfaces, a",
    "sha": "c950e79",
    "content": [
      {
        "type": "p",
        "text": "Seven tasks building app.tnhc.dev: grid entries from Cloud's registry, a Bun server that serves the SPA and proxies auth same-origin, the public request-access and claim pages, the app grid, account and admin surfaces, and deploy wiring."
      },
      {
        "type": "p",
        "text": "Two decisions worth stating. The dashboard is PUBLIC, not gated \u2014 it hosts request-access and claim, which people who are not signed in must reach; gating it would deadlock exactly as gating the auth host would. And the server proxies /api/v1/auth/* onto its own origin rather than letting the browser call auth.tnhc.dev cross-origin, because credentialed CORS across subdomains is the fiddliest part of a browser SSO and proxying sidesteps it entirely. Only that one prefix is proxied; anything broader would be an open relay."
      },
      {
        "type": "p",
        "text": "Also fixes a gap the survey found: only 3 of 85 registered tools carry a public URL, and Draw is not among them because it is a Hosting-deployed site with no tool record. Task 7 registers it so the grid is honest rather than special-casing it in code."
      },
      {
        "type": "h",
        "text": "(cherry picked from commit dc154edb7108eceded28573ef7b23748a97bb1b6)"
      }
    ]
  },
  {
    "slug": "implementation-plan-for-sso-phase-3-the-dashboard-dc154ed",
    "title": "Implementation plan for SSO phase 3 (the dashboard)",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "Seven tasks building app.tnhc.dev: grid entries from Cloud's registry, a Bun server that serves the SPA and proxies auth same-origin, the public request-access and claim pages, the app grid, account and admin surfaces, a",
    "sha": "dc154ed",
    "content": [
      {
        "type": "p",
        "text": "Seven tasks building app.tnhc.dev: grid entries from Cloud's registry, a Bun server that serves the SPA and proxies auth same-origin, the public request-access and claim pages, the app grid, account and admin surfaces, and deploy wiring."
      },
      {
        "type": "p",
        "text": "Two decisions worth stating. The dashboard is PUBLIC, not gated \u2014 it hosts request-access and claim, which people who are not signed in must reach; gating it would deadlock exactly as gating the auth host would. And the server proxies /api/v1/auth/* onto its own origin rather than letting the browser call auth.tnhc.dev cross-origin, because credentialed CORS across subdomains is the fiddliest part of a browser SSO and proxying sidesteps it entirely. Only that one prefix is proxied; anything broader would be an open relay."
      },
      {
        "type": "p",
        "text": "Also fixes a gap the survey found: only 3 of 85 registered tools carry a public URL, and Draw is not among them because it is a Hosting-deployed site with no tool record. Task 7 registers it so the grid is honest rather than special-casing it in code."
      }
    ]
  },
  {
    "slug": "login-gate-with-audience-scoped-identity-forwarding",
    "title": "Login gate with audience-scoped identity forwarding",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "proxy"
    ],
    "category": "Commit",
    "excerpt": "Gated hosts redirect to the login page when there is no valid session, and forward a short-lived signed identity when there is. Apps verify it against Auth's JWKS, so they never call back here and never implement login.",
    "sha": "7c7ee55",
    "content": [
      {
        "type": "p",
        "text": "Gated hosts redirect to the login page when there is no valid session, and forward a short-lived signed identity when there is. Apps verify it against Auth's JWKS, so they never call back here and never implement login."
      },
      {
        "type": "p",
        "text": "Three properties the tests pin down rather than assume:"
      },
      {
        "type": "p",
        "text": "- The auth host is allowlisted structurally, before policy is consulted, so no route row can ever make signing in require being signed in. - redirect_uri is host-matched on a dot boundary, so eviltnhc.dev and tnhc.dev.evil.com are refused along with protocol-relative targets and plaintext downgrades. An unvalidated redirect would turn the login page into a phishing tool that forwards the victim *after* they authenticate. - Any client-supplied x-nexus-identity is stripped before forwarding. Without that the header is attacker-controlled on every public route; a mutation test confirms removing the strip lets \"forged.by.client\" reach the upstream."
      },
      {
        "type": "p",
        "text": "Sessions are cached per (cookie, audience) for 60s, and served stale for up to 15 minutes only while Auth is unreachable, so an Auth restart does not sign everyone out mid-session. A definitive rejection from Auth evicts immediately, so suspension is not delayed by the stale window. Public routes pay nothing \u2014 no cookie read, no call to Auth, no token."
      },
      {
        "type": "p",
        "text": "Nothing is gated yet: requiresAuth is false for every live route."
      }
    ]
  },
  {
    "slug": "carry-a-requiresauth-policy-on-each-route",
    "title": "Carry a requiresAuth policy on each route",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "proxy"
    ],
    "category": "Commit",
    "excerpt": "The route map becomes domain -> {upstream, requiresAuth} so the gate can ask whether a host needs a session. Whether a host is gated is therefore data from Cloud's route table, not code in the proxy.",
    "sha": "b9ffbf1",
    "content": [
      {
        "type": "p",
        "text": "The route map becomes domain -> {upstream, requiresAuth} so the gate can ask whether a host needs a session. Whether a host is gated is therefore data from Cloud's route table, not code in the proxy."
      },
      {
        "type": "p",
        "text": "Absent means public, and the check is `=== true` rather than truthiness, so a missing field, a typo or a stray string all leave a host reachable exactly as it is today. Every fallback path \u2014 the cloud/chat/auth statics and the Hosting wildcard \u2014 also stays public. Gating is strictly opt-in; nothing can be locked out by omission."
      },
      {
        "type": "p",
        "text": "requiresAuth is read but not yet acted on; the gate that consumes it lands in the next commit."
      }
    ]
  },
  {
    "slug": "export-handlerequest-and-only-listen-when-run-directly",
    "title": "Export handleRequest and only listen when run directly",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "refactor",
      "proxy"
    ],
    "category": "Commit",
    "excerpt": "Bun.serve and the route poller both ran at module scope, so importing proxy.ts bound port 8080 \u2014 fighting the running production proxy for it \u2014 and started a timer polling Cloud forever. That made the routing layer impos",
    "sha": "1bfeb18",
    "content": [
      {
        "type": "p",
        "text": "Bun.serve and the route poller both ran at module scope, so importing proxy.ts bound port 8080 \u2014 fighting the running production proxy for it \u2014 and started a timer polling Cloud forever. That made the routing layer impossible to test."
      },
      {
        "type": "p",
        "text": "Both side effects move into startProxy(), called under import.meta.main, so running `bun run proxy.ts` behaves exactly as before while importing the module is inert. Verified: the entrypoint still starts and serves on a spare port, and the production proxy on 8080 was never touched."
      },
      {
        "type": "p",
        "text": "Adds the package scaffolding this needed to be a testable unit \u2014 package.json, tsconfig, a bunfig preload that points the tests at dead ports so they cannot reach Cloud, Auth or production."
      },
      {
        "type": "h",
        "text": "(cherry picked from commit 544585e01f7881091ab0a09d9f7ec42d4cf4765f)"
      }
    ]
  },
  {
    "slug": "exchange-a-session-for-an-audience-scoped-identity-token",
    "title": "Exchange a session for an audience-scoped identity token",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "The proxy calls this with the caller's session and the target host; apps verify the result against the JWKS already published, so they identify the user without calling back. Signed by the same RS256 key and kid as every",
    "sha": "45a1a94",
    "content": [
      {
        "type": "p",
        "text": "The proxy calls this with the caller's session and the target host; apps verify the result against the JWKS already published, so they identify the user without calling back. Signed by the same RS256 key and kid as every other token this service issues."
      },
      {
        "type": "p",
        "text": "Suspension is enforced here, not just at login: a live session for a suspended account gets 403 rather than a fresh identity. A token minted for one audience fails verification against another, which is what stops it being replayed from one app to the next."
      },
      {
        "type": "h",
        "text": "(cherry picked from commit b8d088677098f532fce11ac6d9d79076754f2072)"
      }
    ]
  },
  {
    "slug": "identity-token-claim-set",
    "title": "Identity token claim set",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "The claims an app receives about the signed-in user. Separated from signing so the shape is testable without crypto. Two-minute TTL: the proxy mints one per request and it travels a single hop, so it never needs to live ",
    "sha": "3dcaf7e",
    "content": [
      {
        "type": "p",
        "text": "The claims an app receives about the signed-in user. Separated from signing so the shape is testable without crypto. Two-minute TTL: the proxy mints one per request and it travels a single hop, so it never needs to live longer, and it outlasts the proxy's 60s session cache by design."
      },
      {
        "type": "p",
        "text": "Takes SafeUser rather than User so secret material cannot reach the claims even by accident \u2014 the password hash is not in the input type."
      },
      {
        "type": "h",
        "text": "(cherry picked from commit 39df5c47032fbea3d503c1ecd7d1bd460318092b)"
      }
    ]
  },
  {
    "slug": "detach-services-with-setsid-so-they-survive-their-launcher",
    "title": "Detach services with setsid so they survive their launcher",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "deploy"
    ],
    "category": "Commit",
    "excerpt": "auth, cloud and chat died together twice today, each time presenting as a 502 at the edge \u2014 the tunnel was healthy and the origin had simply vanished.",
    "sha": "db13d92",
    "content": [
      {
        "type": "p",
        "text": "auth, cloud and chat died together twice today, each time presenting as a 502 at the edge \u2014 the tunnel was healthy and the origin had simply vanished."
      },
      {
        "type": "p",
        "text": "Cause: nohup only makes a process ignore SIGHUP. It leaves the service in the launching shell's session, so tearing that session down (an ssh disconnect, a closed terminal, an agent's shell exiting) takes every service with it. All three shared one session id, which is why they always died as a group."
      },
      {
        "type": "p",
        "text": "setsid makes each service its own session leader, so it outlives whatever started it \u2014 verified: pid == pgid == sid for every service now. Job control is off in a non-interactive script, so setsid execs in place rather than forking and $! still refers to the real process."
      },
      {
        "type": "h",
        "text": "(cherry picked from commit 4a84ca8cafb69e7915ac2bccfe10a6eca4765a4c)"
      }
    ]
  },
  {
    "slug": "export-handlerequest-and-only-listen-when-run-directly-544585e",
    "title": "Export handleRequest and only listen when run directly",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "refactor",
      "proxy"
    ],
    "category": "Commit",
    "excerpt": "Bun.serve and the route poller both ran at module scope, so importing proxy.ts bound port 8080 \u2014 fighting the running production proxy for it \u2014 and started a timer polling Cloud forever. That made the routing layer impos",
    "sha": "544585e",
    "content": [
      {
        "type": "p",
        "text": "Bun.serve and the route poller both ran at module scope, so importing proxy.ts bound port 8080 \u2014 fighting the running production proxy for it \u2014 and started a timer polling Cloud forever. That made the routing layer impossible to test."
      },
      {
        "type": "p",
        "text": "Both side effects move into startProxy(), called under import.meta.main, so running `bun run proxy.ts` behaves exactly as before while importing the module is inert. Verified: the entrypoint still starts and serves on a spare port, and the production proxy on 8080 was never touched."
      },
      {
        "type": "p",
        "text": "Adds the package scaffolding this needed to be a testable unit \u2014 package.json, tsconfig, a bunfig preload that points the tests at dead ports so they cannot reach Cloud, Auth or production."
      }
    ]
  },
  {
    "slug": "exchange-a-session-for-an-audience-scoped-identity-token-b8d0886",
    "title": "Exchange a session for an audience-scoped identity token",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "The proxy calls this with the caller's session and the target host; apps verify the result against the JWKS already published, so they identify the user without calling back. Signed by the same RS256 key and kid as every",
    "sha": "b8d0886",
    "content": [
      {
        "type": "p",
        "text": "The proxy calls this with the caller's session and the target host; apps verify the result against the JWKS already published, so they identify the user without calling back. Signed by the same RS256 key and kid as every other token this service issues."
      },
      {
        "type": "p",
        "text": "Suspension is enforced here, not just at login: a live session for a suspended account gets 403 rather than a fresh identity. A token minted for one audience fails verification against another, which is what stops it being replayed from one app to the next."
      }
    ]
  },
  {
    "slug": "identity-token-claim-set-39df5c4",
    "title": "Identity token claim set",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "The claims an app receives about the signed-in user. Separated from signing so the shape is testable without crypto. Two-minute TTL: the proxy mints one per request and it travels a single hop, so it never needs to live ",
    "sha": "39df5c4",
    "content": [
      {
        "type": "p",
        "text": "The claims an app receives about the signed-in user. Separated from signing so the shape is testable without crypto. Two-minute TTL: the proxy mints one per request and it travels a single hop, so it never needs to live longer, and it outlasts the proxy's 60s session cache by design."
      },
      {
        "type": "p",
        "text": "Takes SafeUser rather than User so secret material cannot reach the claims even by accident \u2014 the password hash is not in the input type."
      }
    ]
  },
  {
    "slug": "detach-services-with-setsid-so-they-survive-their-launcher-4a84ca8",
    "title": "Detach services with setsid so they survive their launcher",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "deploy"
    ],
    "category": "Commit",
    "excerpt": "auth, cloud and chat died together twice today, each time presenting as a 502 at the edge \u2014 the tunnel was healthy and the origin had simply vanished.",
    "sha": "4a84ca8",
    "content": [
      {
        "type": "p",
        "text": "auth, cloud and chat died together twice today, each time presenting as a 502 at the edge \u2014 the tunnel was healthy and the origin had simply vanished."
      },
      {
        "type": "p",
        "text": "Cause: nohup only makes a process ignore SIGHUP. It leaves the service in the launching shell's session, so tearing that session down (an ssh disconnect, a closed terminal, an agent's shell exiting) takes every service with it. All three shared one session id, which is why they always died as a group."
      },
      {
        "type": "p",
        "text": "setsid makes each service its own session leader, so it outlives whatever started it \u2014 verified: pid == pgid == sid for every service now. Job control is off in a non-interactive script, so setsid execs in place rather than forking and $! still refers to the real process."
      }
    ]
  },
  {
    "slug": "black-screen-on-https-use-wss-guard-collab-websocket",
    "title": "Black screen on HTTPS \u2014 use wss + guard collab WebSocket",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "draw"
    ],
    "category": "Commit",
    "excerpt": "connectCollab built a ws:// URL unconditionally. On the deployed HTTPS site new WebSocket('ws://...') throws synchronously (mixed content), which crashes the collab effect and unmounts React \u2014 leaving a black page. Now d",
    "sha": "26debf2",
    "content": [
      {
        "type": "p",
        "text": "connectCollab built a ws:// URL unconditionally. On the deployed HTTPS site new WebSocket('ws://...') throws synchronously (mixed content), which crashes the collab effect and unmounts React \u2014 leaving a black page. Now derives wss:// from location.protocol and wraps provider construction so any failure degrades to an inert binding instead of taking the editor down."
      }
    ]
  },
  {
    "slug": "ai-generation-panel-with-apply-to-canvas",
    "title": "AI generation panel with apply-to-canvas",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "draw"
    ],
    "category": "Commit",
    "excerpt": "Adds an AI sidebar tab with a prompt textarea and Generate button. On success it fetches the refreshed board, replaces store state, selects the newly added elements and persists the active board id; surfaces done/error/g",
    "sha": "f53a704",
    "content": [
      {
        "type": "p",
        "text": "Adds an AI sidebar tab with a prompt textarea and Generate button. On success it fetches the refreshed board, replaces store state, selects the newly added elements and persists the active board id; surfaces done/error/generating states. Wired into App via the sidebar 'ai' toggle."
      }
    ]
  },
  {
    "slug": "ai-generation-panel-with-apply-to-canvas-9834851",
    "title": "AI generation panel with apply-to-canvas",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "draw"
    ],
    "category": "Commit",
    "excerpt": "Adds an AI sidebar tab with a prompt textarea and Generate button. On success it fetches the refreshed board, replaces store state, selects the newly added elements and persists the active board id; surfaces done/error/g",
    "sha": "9834851",
    "content": [
      {
        "type": "p",
        "text": "Adds an AI sidebar tab with a prompt textarea and Generate button. On success it fetches the refreshed board, replaces store state, selects the newly added elements and persists the active board id; surfaces done/error/generating states. Wired into App via the sidebar 'ai' toggle."
      }
    ]
  },
  {
    "slug": "deterministic-diagram-synthesizer",
    "title": "Deterministic diagram synthesizer",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "draw"
    ],
    "category": "Commit",
    "excerpt": "Synthesizes a vertical flow diagram (boxes, labels, arrows) from a prompt. Ids are seeded from the prompt hash so generation is deterministic, arrows link consecutive node boxes, and order is the plain array index. Adds ",
    "sha": "1b15096",
    "content": [
      {
        "type": "p",
        "text": "Synthesizes a vertical flow diagram (boxes, labels, arrows) from a prompt. Ids are seeded from the prompt hash so generation is deterministic, arrows link consecutive node boxes, and order is the plain array index. Adds the aiElementsToServerElements passthrough used by the AI route."
      }
    ]
  },
  {
    "slug": "collaborative-binding-live-presence-pill",
    "title": "Collaborative binding + live presence pill",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "draw"
    ],
    "category": "Commit",
    "excerpt": "Adds a CollabBinding that binds the store's elements array to a yjs Y.Doc through a y-websocket provider (writeElements/yToElements/elementsEqual from B1), with a suppress flag so local writes don't echo back into the st",
    "sha": "9ada47d",
    "content": [
      {
        "type": "p",
        "text": "Adds a CollabBinding that binds the store's elements array to a yjs Y.Doc through a y-websocket provider (writeElements/yToElements/elementsEqual from B1), with a suppress flag so local writes don't echo back into the store. connectCollab opens a WebsocketProvider for a board; App.tsx wires local edits out (setElements) and remote edits in (setElementsLive + setCollabActive). Canvas renders a Live/Offline pill, and the Vite dev proxy forwards WebSocket upgrades to the Bun server."
      }
    ]
  },
  {
    "slug": "implementation-plan-for-sso-phase-2-the-gate",
    "title": "Implementation plan for SSO phase 2 (the gate)",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "Five TDD tasks: identity claim set, the session-to-identity-token endpoint in Nexus-Auth, making the proxy importable without binding port 8080, a requiresAuth policy field on each route, and the gate itself.",
    "sha": "076ddc2",
    "content": [
      {
        "type": "p",
        "text": "Five TDD tasks: identity claim set, the session-to-identity-token endpoint in Nexus-Auth, making the proxy importable without binding port 8080, a requiresAuth policy field on each route, and the gate itself."
      },
      {
        "type": "p",
        "text": "The claim set and endpoint reuse machinery that already exists \u2014 signJwt with the published kid, and validateServiceToken which already checks audience \u2014 so apps verify against the JWKS Auth already serves."
      },
      {
        "type": "p",
        "text": "Three security properties the tests pin down rather than assume: the auth host is allowlisted structurally so no route row can deadlock login; redirect_uri is host-matched on a dot boundary so eviltnhc.dev and tnhc.dev.evil.com are refused; and any client-supplied x-nexus-identity is stripped before forwarding, without which the header is attacker-controlled on public routes."
      },
      {
        "type": "p",
        "text": "Nothing becomes gated in this phase \u2014 requiresAuth defaults to false, so every existing route keeps behaving exactly as it does today."
      }
    ]
  },
  {
    "slug": "yjs-collaboration-and-ai-helpers-work-in-progress",
    "title": "Yjs collaboration and AI helpers (work in progress)",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "draw"
    ],
    "category": "Commit",
    "excerpt": "Committed from another session's working tree at the user's request; not authored or reviewed here.",
    "sha": "527c533",
    "content": [
      {
        "type": "p",
        "text": "Committed from another session's working tree at the user's request; not authored or reviewed here."
      },
      {
        "type": "p",
        "text": "Known red: tests/collab.test.ts binds port 3075, times out after ~5s and never releases the port, so every backend test file that runs after it fails with \"Failed to start server. Is port 3075 in use?\" \u2014 taking previously green board-route tests down with it. tests/server.test.ts passes 5/5 on its own, and the frontend suite is 80/80 under vitest, so the cascade is entirely this one test's cleanup."
      }
    ]
  },
  {
    "slug": "http-routes-for-the-account-lifecycle",
    "title": "HTTP routes for the account lifecycle",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "Four public endpoints (request access, claim, recover, redeem invite) and four operator endpoints (queue, approve, reject, mint invite). The three that check a secret are rate limited by client IP, counting only failures",
    "sha": "cef0544",
    "content": [
      {
        "type": "p",
        "text": "Four public endpoints (request access, claim, recover, redeem invite) and four operator endpoints (queue, approve, reject, mint invite). The three that check a secret are rate limited by client IP, counting only failures."
      },
      {
        "type": "p",
        "text": "users:approve is a new permission held by founder and admin only \u2014 approving an account is an owner-level action, not a routine operator one."
      }
    ]
  },
  {
    "slug": "lift-the-request-handler-out-of-bun-serve",
    "title": "Lift the request handler out of Bun.serve",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "refactor",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "Pure extraction \u2014 route parity verified identical, all 39 tests unchanged. handleRequest is now a top-level export so tests can drive routes with a Request instead of binding port 4310. The two env-derived values the bod",
    "sha": "dd5cbfd",
    "content": [
      {
        "type": "p",
        "text": "Pure extraction \u2014 route parity verified identical, all 39 tests unchanged. handleRequest is now a top-level export so tests can drive routes with a Request instead of binding port 4310. The two env-derived values the body used are read once at module scope rather than closed over."
      }
    ]
  },
  {
    "slug": "operator-minted-invite-codes",
    "title": "Operator-minted invite codes",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "The direct path in, handed over out-of-band, redeeming straight to an active account and skipping the waitlist queue. A rejected attempt \u2014 weak password, taken username \u2014 leaves the code usable, so a typo cannot burn som",
    "sha": "5299eee",
    "content": [
      {
        "type": "p",
        "text": "The direct path in, handed over out-of-band, redeeming straight to an active account and skipping the waitlist queue. A rejected attempt \u2014 weak password, taken username \u2014 leaves the code usable, so a typo cannot burn someone's only way in. Unknown and already-redeemed codes give the same answer."
      }
    ]
  },
  {
    "slug": "single-use-recovery-codes-issued-at-claim-time",
    "title": "Single-use recovery codes issued at claim time",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "With no outbound email there is no reset link, so ten single-use codes are the only self-service way back into an account. Stored as sha256 of 128-bit random values, burned on use, and replaced wholesale on regeneration ",
    "sha": "6f27926",
    "content": [
      {
        "type": "p",
        "text": "With no outbound email there is no reset link, so ten single-use codes are the only self-service way back into an account. Stored as sha256 of 128-bit random values, burned on use, and replaced wholesale on regeneration so a leaked old set stops working."
      }
    ]
  },
  {
    "slug": "claim-an-approved-account-with-a-one-time-code",
    "title": "Claim an approved account with a one-time code",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "Redeeming sets the password, burns the claim code and activates the account. Unknown email and wrong code return the same 'invalid_code' so the endpoint cannot be used to enumerate which addresses have been approved; the",
    "sha": "bab5db4",
    "content": [
      {
        "type": "p",
        "text": "Redeeming sets the password, burns the claim code and activates the account. Unknown email and wrong code return the same 'invalid_code' so the endpoint cannot be used to enumerate which addresses have been approved; the status reason is only revealed once the code has proved the caller is the requester."
      }
    ]
  },
  {
    "slug": "public-access-requests-with-one-time-claim-codes",
    "title": "Public access requests with one-time claim codes",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "The claim code is shown at request time rather than sent on approval, because there is no outbound email to send it with \u2014 the user polls instead of being notified, and the code is what proves the returning visitor made ",
    "sha": "4c6b4be",
    "content": [
      {
        "type": "p",
        "text": "The claim code is shown at request time rather than sent on approval, because there is no outbound email to send it with \u2014 the user polls instead of being notified, and the code is what proves the returning visitor made the request. Stored as sha256 only; 128 bits of entropy means a fast hash is the right choice, scrypt's work factor buys nothing against a random 16-byte value."
      }
    ]
  },
  {
    "slug": "account-status-state-machine-replaces-the-disabled-flag",
    "title": "Account status state machine replaces the disabled flag",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "A boolean could not express \"approved but not yet claimed\" \u2014 the state an invited account sits in between the operator approving it and the user setting a password. authenticateUser and userHasPermission now require stat",
    "sha": "932e62e",
    "content": [
      {
        "type": "p",
        "text": "A boolean could not express \"approved but not yet claimed\" \u2014 the state an invited account sits in between the operator approving it and the user setting a password. authenticateUser and userHasPermission now require status 'active', so pending, approved, suspended and rejected accounts are all refused by one rule rather than several."
      },
      {
        "type": "p",
        "text": "Records written before this change are mapped on hydrate (disabled -> suspended, otherwise active) so an existing store does not lock everyone out."
      }
    ]
  },
  {
    "slug": "drop-the-undefined-phantom-stop-switch-user-patch-to-status",
    "title": "Drop the undefined phantom.stop(); switch user PATCH to status",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "Two changes to server.ts, both small enough to keep together.",
    "sha": "8c7b596",
    "content": [
      {
        "type": "p",
        "text": "Two changes to server.ts, both small enough to keep together."
      },
      {
        "type": "p",
        "text": "`phantom` is not imported, defined or started anywhere in this file, so stop() threw ReferenceError before reaching server.stop() \u2014 the server never actually shut down, and `bunx tsc --noEmit` had been failing on main because of it. stopHeartbeat() and server.stop() are the real teardown."
      },
      {
        "type": "p",
        "text": "PATCH /api/v1/auth/users/:id now takes `status` instead of `disabled`, following the account state machine landing in the next commit."
      }
    ]
  },
  {
    "slug": "implementation-plan-for-sso-phase-1-identity",
    "title": "Implementation plan for SSO phase 1 (identity)",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "Seven TDD tasks inside apps/Nexus-Auth: the account state machine replacing the disabled boolean, public access requests with one-time claim codes, the claim flow, single-use recovery codes, operator invite codes, a fail",
    "sha": "5d3e484",
    "content": [
      {
        "type": "p",
        "text": "Seven TDD tasks inside apps/Nexus-Auth: the account state machine replacing the disabled boolean, public access requests with one-time claim codes, the claim flow, single-use recovery codes, operator invite codes, a failure-only rate limiter, and the HTTP routes for all of it."
      },
      {
        "type": "p",
        "text": "Phase 1 of four; the spec's later phases (proxy gate, dashboard, nexus-chat integration) get their own plans. This one is self-contained and testable over the API with no UI."
      },
      {
        "type": "p",
        "text": "Two reconciliations with the existing code: the spec's \"two roles\" was about the dashboard's access model, so the five-role permission matrix stays; and User.username already is the handle, so no second field is added."
      },
      {
        "type": "p",
        "text": "Test-fixture passwords in the plan carry allowlist-secret pragmas; the scanner cannot tell a sample from a credential."
      }
    ]
  },
  {
    "slug": "design-for-ecosystem-sso-and-the-front-door",
    "title": "Design for ecosystem SSO and the front door",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "A visitor to tnhc.dev cannot get an account and there is no single place to reach anything; apps carry their own logins. This specs the fix.",
    "sha": "649a600",
    "content": [
      {
        "type": "p",
        "text": "A visitor to tnhc.dev cannot get an account and there is no single place to reach anything; apps carry their own logins. This specs the fix."
      },
      {
        "type": "p",
        "text": "Nexus-Auth already is an OIDC provider with a .tnhc.dev-scoped session cookie, so this finishes an SSO that is mostly built rather than starting one. What is missing is public registration, a front door, and app adoption."
      },
      {
        "type": "p",
        "text": "Five decisions: static apex with the product at app.tnhc.dev; gate the tools but never published Hosting output; invite-only with a flag-flip to open signup; recovery codes now with TOTP later; and one gate at the proxy issuing a short-lived signed identity JWT that apps verify against the existing JWKS."
      },
      {
        "type": "p",
        "text": "Two constraints shaped it. No flow may depend on outbound email \u2014 self-hosting SMTP is easy but residential deliverability is a wall \u2014 so the claim code is handed over at request time and the user polls rather than being notified. And nothing may assume a single node, so auth policy and the dashboard's app list are read from Cloud's registry rather than hardcoded."
      },
      {
        "type": "p",
        "text": "Both user tables are empty today, which removes migration entirely: nexus-chat adopts the Nexus account UUID as its own user id and deletes its login."
      }
    ]
  },
  {
    "slug": "bring-nexus-chat-up-with-the-rest-of-the-stack",
    "title": "Bring nexus-chat up with the rest of the stack",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "deploy"
    ],
    "category": "Commit",
    "excerpt": "chat.$DOMAIN now depends on two processes deploy.sh knew nothing about, so a reboot would have taken it down with no path back \u2014 the documented recovery is `deploy.sh bg` and that would have restored every service except",
    "sha": "7d5ac21",
    "content": [
      {
        "type": "p",
        "text": "chat.$DOMAIN now depends on two processes deploy.sh knew nothing about, so a reboot would have taken it down with no path back \u2014 the documented recovery is `deploy.sh bg` and that would have restored every service except this one."
      },
      {
        "type": "p",
        "text": "Starts the Rust server on 8180/8181/8182 and the Caddy front door on 8095, and adds both to the stop and status loops. The health probe hits 8095/api/v1/health rather than the API directly: 8095 is the origin chat.$DOMAIN actually reaches, so a healthy API behind a dead front door must not read as up."
      },
      {
        "type": "p",
        "text": "Both are skipped with a warning rather than failing the deploy when deploy/production/nexus-chat.env, the built binary, or caddy is missing, so a node without them still brings up everything else."
      }
    ]
  },
  {
    "slug": "serve-chat-tnhc-dev-from-nexus-chat",
    "title": "Serve chat.tnhc.dev from nexus-chat",
    "date": "2026-08-11",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "deploy"
    ],
    "category": "Commit",
    "excerpt": "nexus-chat is three ports (REST 8180, gateway 8181, voice 8182) plus a separate static SPA whose production build calls /api and /gateway same-origin with no dev-server proxy behind it. The ecosystem proxy maps one hostn",
    "sha": "d8bdb2f",
    "content": [
      {
        "type": "p",
        "text": "nexus-chat is three ports (REST 8180, gateway 8181, voice 8182) plus a separate static SPA whose production build calls /api and /gateway same-origin with no dev-server proxy behind it. The ecosystem proxy maps one hostname to exactly one upstream and cannot split by path, so nexus-chat.Caddyfile joins them into a single origin on :8095 and chat.tnhc.dev points there."
      },
      {
        "type": "p",
        "text": "Adapted from apps/Nexus/Caddyfile with three deliberate changes: plain HTTP on a high port (Cloudflare terminates TLS and nothing here may hold 80/443, the same reason hosting.compose.yml drops Caddy), upstreams on 818x rather than nexus-chat's 808x defaults (8080 is the ecosystem proxy, 8090 the Hosting site-proxy), and no HSTS since this never faces the internet directly."
      },
      {
        "type": "p",
        "text": "Also bumps the apps/Nexus and apps/Nexus-Hosting pointers."
      },
      {
        "type": "p",
        "text": "Cutover in the Cloud registry, all reversible: registered tool `nexus-chat` with upstream :8095, took an active website address for chat.tnhc.dev, then revoked nexus-team-chat's address AND its exposure record \u2014 the exposure is a second, separate source of routes, so revoking only the address left both tools claiming the domain and the proxy picking whichever came last."
      },
      {
        "type": "p",
        "text": "nexus-team-chat is left running and heartbeating on 3109; it simply no longer claims a public address, so restoring it is a re-request away."
      }
    ]
  },
  {
    "slug": "drop-the-fake-fill-zoom-tools-and-give-the-eraser-a-real-hot",
    "title": "Drop the fake fill/zoom tools and give the eraser a real hotkey",
    "date": "2026-08-10",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "draw"
    ],
    "category": "Commit",
    "excerpt": "Completes Task 10's toolbar cleanup, which the overlay commit left undone.",
    "sha": "8d1e4de",
    "content": [
      {
        "type": "p",
        "text": "Completes Task 10's toolbar cleanup, which the overlay commit left undone."
      },
      {
        "type": "p",
        "text": "\"fill\" and \"zoom\" were selectable tools with nothing behind them \u2014 there is no fill implementation, and zoom is driven by the top bar and Ctrl +/-/0."
      },
      {
        "type": "p",
        "text": "\"ellipse\" and \"eraser\" both advertised \"E\" while the canvas bound \"e\" to ellipse, so the eraser's badge, tooltip and shortcuts overlay all promised a key that did nothing. Ellipse moves to \"O\" and the eraser takes \"E\", matching the whiteboard convention (Excalidraw/tldraw); the canvas now binds both."
      },
      {
        "type": "p",
        "text": "A hotkey collision is invisible in the UI, so Toolbar.test.ts asserts keys are distinct and that no unimplemented tool is listed."
      }
    ]
  },
  {
    "slug": "restore-saved-elements-on-reload-and-debounce-autosave",
    "title": "Restore saved elements on reload and debounce autosave",
    "date": "2026-08-10",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "draw"
    ],
    "category": "Commit",
    "excerpt": "Two defects in the persistence wiring:",
    "sha": "2330e7c",
    "content": [
      {
        "type": "p",
        "text": "Two defects in the persistence wiring:"
      },
      {
        "type": "p",
        "text": "1. Reload lost the entire drawing. setBoard() seeds store.elements from board.elements, but nothing keeps board.elements in sync while editing \u2014 the live elements are persisted separately as doc.elements. Booting from doc.board therefore restored an empty canvas every time. The unit tests passed because the fault was in the boot wiring, not the serializer. bootBoard() now re-joins the two, and its test asserts that the stored board is empty on its own so the regression cannot come back unnoticed."
      },
      {
        "type": "p",
        "text": "2. Autosave ran on every store notification, including the per-frame setElementsLive updates a move/resize/rotate drag emits \u2014 deep-cloning and stringifying the whole document on every mousemove. Writes are debounced 400ms, with a flush on pagehide/visibilitychange so a pending write is not lost when the tab goes away."
      }
    ]
  },
  {
    "slug": "stop-resize-handles-responding-on-locked-hidden-elements",
    "title": "Stop resize handles responding on locked/hidden elements",
    "date": "2026-08-10",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "draw"
    ],
    "category": "Commit",
    "excerpt": "An element can be selected first and locked or hidden afterwards from the layer panel. The handle hit-test only skipped unselected elements, so the resize/rotate handles of an already-selected element stayed grabbable af",
    "sha": "596dc82",
    "content": [
      {
        "type": "p",
        "text": "An element can be selected first and locked or hidden afterwards from the layer panel. The handle hit-test only skipped unselected elements, so the resize/rotate handles of an already-selected element stayed grabbable after locking it \u2014 lock was cosmetic for anything currently selected."
      }
    ]
  },
  {
    "slug": "nexus-draw-phase-1-editor-spec-build-plan",
    "title": "Nexus-Draw phase-1 editor spec + build plan",
    "date": "2026-08-10",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "Approved design to turn draw.tnhc.dev from a rect-only facade into a real single-user whiteboard: Canvas 2D renderer with per-element clean/sketch modes (roughjs + perfect-freehand), all tools working, select/move/resize",
    "sha": "29ca9be",
    "content": [
      {
        "type": "p",
        "text": "Approved design to turn draw.tnhc.dev from a rect-only facade into a real single-user whiteboard: Canvas 2D renderer with per-element clean/sketch modes (roughjs + perfect-freehand), all tools working, select/move/resize/rotate, wired properties + layers panels, PNG/SVG export, localStorage persistence, then redeploy. 11 TDD-structured tasks; pure geometry/hit-test/SVG/persistence are unit-tested, canvas rendering is build+visual-verified. Collaboration is phase 2."
      }
    ]
  },
  {
    "slug": "lock-two-phase-2-decisions-absorb-over-100-cost-keep-acme-ts",
    "title": "Lock two phase-2 decisions \u2014 absorb over-100 cost, keep acme.ts gated",
    "date": "2026-08-10",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "Cost past the free 100 custom hostnames (~$1.20/yr each) is absorbed by the platform and never passed to users. acme.ts is kept (disabled by default) as the TLS path for future self-host nodes, not deleted.",
    "sha": "990f012",
    "content": [
      {
        "type": "p",
        "text": "Cost past the free 100 custom hostnames (~$1.20/yr each) is absorbed by the platform and never passed to users. acme.ts is kept (disabled by default) as the TLS path for future self-host nodes, not deleted."
      }
    ]
  },
  {
    "slug": "implementation-plan-for-user-custom-domains-phase-2",
    "title": "Implementation plan for user custom domains (phase 2)",
    "date": "2026-08-10",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "Bite-sized, TDD, 10 tasks: Cloud CF-for-SaaS module + endpoints (live-verified), custom_domains migration, Hosting client + add/verify/delete wiring to Cloud, retire the unusable ACME path, config + submodule pointer adv",
    "sha": "104325c",
    "content": [
      {
        "type": "p",
        "text": "Bite-sized, TDD, 10 tasks: Cloud CF-for-SaaS module + endpoints (live-verified), custom_domains migration, Hosting client + add/verify/delete wiring to Cloud, retire the unusable ACME path, config + submodule pointer advance. Task 0 is the operator's one-time Cloudflare setup (enable SaaS, fallback origin, SSL:Edit on the token). Serving path already exists (proxy lookup_site handles verified custom_domains), so no task rebuilds it."
      }
    ]
  },
  {
    "slug": "design-spec-for-user-custom-domains-phase-2-cloudflare-for-s",
    "title": "Design spec for user custom domains (phase 2, Cloudflare for SaaS)",
    "date": "2026-08-10",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "Approved design for attaching a user's own domain to a Hosting site from the dashboard, with automatic TLS via Cloudflare for SaaS (100 free, then $0.10/mo), on the no-public-IP tunnel architecture. Confirms the serving ",
    "sha": "d264720",
    "content": [
      {
        "type": "p",
        "text": "Approved design for attaching a user's own domain to a Hosting site from the dashboard, with automatic TLS via Cloudflare for SaaS (100 free, then $0.10/mo), on the no-public-IP tunnel architecture. Confirms the serving path already exists (nexus-proxy lookup_site already resolves verified custom_domains \u2192 site); the build is the CF-for-SaaS custom-hostname integration in Cloud + wiring the existing Hosting domain flow to it, plus retiring the unusable ACME/HTTP-01 path."
      }
    ]
  },
  {
    "slug": "route-the-tnhc-dev-wildcard-to-nexus-hosting-sites",
    "title": "Route the *.tnhc.dev wildcard to Nexus-Hosting sites",
    "date": "2026-08-09",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "proxy"
    ],
    "category": "Commit",
    "excerpt": "The ecosystem proxy 404'd any on-domain host without a registered app route, so deployed Hosting sites were reachable only on the local site-proxy (8090) and never through the tunnel. Add a default backend: after the Clo",
    "sha": "321d08c",
    "content": [
      {
        "type": "p",
        "text": "The ecosystem proxy 404'd any on-domain host without a registered app route, so deployed Hosting sites were reachable only on the local site-proxy (8090) and never through the tunnel. Add a default backend: after the Cloud-registry lookup and the static auth/cloud/chat/apex fallbacks, any remaining *.$DOMAIN host is forwarded to HOSTING_SITE_UPSTREAM (default http://127.0.0.1:8090)."
      },
      {
        "type": "p",
        "text": "Hosting's Rust site-proxy dispatches on X-Forwarded-Host (axum's Host extractor reads it before the real Host, which this proxy rewrites to the upstream) and serves the deployed site or its own branded 404, so forwarding every unmatched host is safe. Apps in Cloud's registry and the static fallbacks keep precedence above the default backend, and the matchesDomain() gate still 404s off-domain hosts \u2014 this is a default backend for the wildcard, not an open relay."
      },
      {
        "type": "p",
        "text": "This is the \"one door at 8080, Cloud's registry decides app-vs-site\" model: *.tnhc.dev at the edge \u2192 proxy \u2192 app port, or \u2192 Hosting for a deployed site."
      },
      {
        "type": "p",
        "text": "deploy.sh passes HOSTING_SITE_UPSTREAM (empty disables it, for a node not running the Hosting site-proxy)."
      },
      {
        "type": "p",
        "text": "Verified locally on a throwaway port then live: auth/cloud/chat unchanged, demo/chain.tnhc.dev served byte-identical to direct 8090, unknown host \u2192 Hosting 404, off-domain \u2192 proxy 404."
      }
    ]
  },
  {
    "slug": "add-global-cloud-ecosystem-taxonomy-v4-master-blueprint",
    "title": "Add global cloud ecosystem taxonomy (v4 master blueprint)",
    "date": "2026-08-09",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "A reference taxonomy of the global cloud landscape \u2014 surface, deep, dark, and frontier layers \u2014 and a gap map against the current Nexus-* ecosystem. Serves as the source document for deriving future apps/services, in the",
    "sha": "8b854fe",
    "content": [
      {
        "type": "p",
        "text": "A reference taxonomy of the global cloud landscape \u2014 surface, deep, dark, and frontier layers \u2014 and a gap map against the current Nexus-* ecosystem. Serves as the source document for deriving future apps/services, in the same descriptor style as the existing ecosystem blueprint. Descriptive prose only; no secrets or credentials."
      },
      {
        "type": "p",
        "text": "The inferior duplicate at docs/ (still carrying a pasted chat preamble) is left untracked; this apps/docs copy is canonical."
      }
    ]
  },
  {
    "slug": "implement-openid-connect-authorization-code-flow-with-pkce",
    "title": "Implement OpenID Connect \u2014 authorization code flow with PKCE",
    "date": "2026-08-09",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "Nexus-Auth published oauth/jwks and oauth/userinfo, which made it look like an OIDC provider without being one: no discovery document, no authorize endpoint, no token endpoint. A standards-compliant client could not comp",
    "sha": "c767622",
    "content": [
      {
        "type": "p",
        "text": "Nexus-Auth published oauth/jwks and oauth/userinfo, which made it look like an OIDC provider without being one: no discovery document, no authorize endpoint, no token endpoint. A standards-compliant client could not complete a single sign-in \u2014 Nexus-Hosting's openid-client called discovery() and got a 404."
      },
      {
        "type": "p",
        "text": "Implementing the real flow rather than special-casing Nexus-Auth inside each app is what keeps those apps self-hostable. Hosting's premise is that other people run nodes and point it at their own Authentik or Keycloak; an app that speaks OIDC works with all of them, including this one. Teaching it to call /api/v1/auth/check instead would have been much less work and would have spent the federation story to get there."
      },
      {
        "type": "p",
        "text": "Deliberate constraints:"
      },
      {
        "type": "p",
        "text": "- PKCE mandatory, S256 only. `plain` is permitted by the spec but offers no protection against code interception and there is no legacy client to carry. - redirect_uri must match a registered value exactly. Prefix matching is a standing open redirect: \"https://app/cb\" would also accept \"https://app/cb.attacker.test\", and an open redirect here leaks a code. - An unknown client or unregistered redirect_uri returns 400 rather than redirecting, because redirecting is the vulnerability. Protocol errors after that point do go back to the client, as the spec requires. - Codes are single-use with a 60s TTL, deleted before validation so a replay cannot race the first exchange, and bound to the client_id and redirect_uri they were issued for \u2014 both re-checked at the token endpoint, since that call is separate and unauthenticated. - The access token is a real session rather than a second token type, so /userinfo and every existing check validate it unchanged and it revokes through the same machinery."
      },
      {
        "type": "p",
        "text": "ID tokens are signed by signJwt, extracted from issueServiceToken so both use one path \u2014 a parallel signing routine is how a `kid` or an algorithm drifts out of step with what JWKS advertises."
      },
      {
        "type": "p",
        "text": "Verified against https://auth.tnhc.dev: discovery serves the correct issuer; an unregistered client and an unregistered redirect_uri are both refused without redirecting; missing and `plain` PKCE are rejected; a full authorize/token exchange returns an id_token whose signature verifies against the published JWKS with the right iss, aud and nonce, while a tampered signature does not; the access token works at /userinfo; and replaying a code returns invalid_grant."
      },
      {
        "type": "p",
        "text": "Client registrations live in apps/Nexus-Auth/data/oidc-clients.json, gitignored because it holds client secrets."
      }
    ]
  },
  {
    "slug": "edge-ordering-check-failed-on-any-graph-with-ten-or-more-edg",
    "title": "Edge ordering check failed on any graph with ten or more edges",
    "date": "2026-08-09",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "graph"
    ],
    "category": "Commit",
    "excerpt": "The release gate has never passed. It runs five sub-workflows and died on `graph` with exit 1, printing only \"failed on workflow 'graph'\" because it swallows the child's stderr \u2014 the real message was \"edges must be sorte",
    "sha": "5d23bf0",
    "content": [
      {
        "type": "p",
        "text": "The release gate has never passed. It runs five sub-workflows and died on `graph` with exit 1, printing only \"failed on workflow 'graph'\" because it swallows the child's stderr \u2014 the real message was \"edges must be sorted by id for deterministic output\", twice."
      },
      {
        "type": "p",
        "text": "Edge ids are synthetic and sequential (\"edge:1\", \"edge:2\", \u2026) and the validator compared them as strings, so \"edge:10\" < \"edge:9\" and the check tripped the moment a graph had ten edges. This one has 140. The output was never actually non-deterministic: build_graph sorts the (source, target, relation) tuples and numbers them in that order."
      },
      {
        "type": "p",
        "text": "Rather than zero-padding the ids to make a wrong test pass, the validator now checks the two things that are actually guaranteed \u2014 ids ascending numerically, and edges ordered by (source, target, relation). That is strictly stronger than what it replaced: verified that shuffled edge content and shuffled numbering are both caught, while a twelve-edge graph \u2014 the exact shape that used to fail \u2014 validates cleanly."
      },
      {
        "type": "p",
        "text": "Reproduced against a `git archive` export rather than the working tree: with submodules populated the scan walks far more than CI does and takes minutes, which is why this needed the export to surface in seconds."
      },
      {
        "type": "p",
        "text": "Runs clean now: 78 nodes, 140 edges, exit 0. The 13 remaining warnings are malformed metadata keys in Nexuslang tutorial docs and do not fail the gate (--fail-on-warning is not set)."
      }
    ]
  },
  {
    "slug": "drop-bincode-it-was-declared-but-never-used",
    "title": "Drop bincode \u2014 it was declared but never used",
    "date": "2026-08-09",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "nexus-db"
    ],
    "category": "Commit",
    "excerpt": "The last Stack Control failure was `1 dependency lagging by >= 1 major version`: bincode pinned at 1.3.3 against a current 3.0.0. It is also the crate behind the unmaintained advisory, so it accounted for both remaining ",
    "sha": "3c9302e",
    "content": [
      {
        "type": "p",
        "text": "The last Stack Control failure was `1 dependency lagging by >= 1 major version`: bincode pinned at 1.3.3 against a current 3.0.0. It is also the crate behind the unmaintained advisory, so it accounted for both remaining findings."
      },
      {
        "type": "p",
        "text": "`git grep bincode` across the tree matches only Cargo.toml and Cargo.lock \u2014 no .rs file references it in any of the three crates. So this was never a migration question. Upgrading bincode across two majors would have meant a new API and, in a database engine, a changed on-disk encoding; removing an unused dependency carries none of that. cargo check passes unchanged."
      },
      {
        "type": "p",
        "text": "That leaves nothing pinned to an unmaintained crate and no major-version lag, and it removes the advisory outright rather than relying on the informational classification added in the previous commit \u2014 that classification still matters, but nothing here now depends on it."
      }
    ]
  },
  {
    "slug": "clear-the-real-advisories-and-stop-informational-ones-failin",
    "title": "Clear the real advisories, and stop informational ones failing the build",
    "date": "2026-08-09",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "deps"
    ],
    "category": "Commit",
    "excerpt": "Stack Control was not broken \u2014 it was reporting genuine findings and exiting 1, which is what a security gate is for. Three of its four matches were real and are now fixed; the fourth is not a vulnerability at all.",
    "sha": "d1a2568",
    "content": [
      {
        "type": "p",
        "text": "Stack Control was not broken \u2014 it was reporting genuine findings and exiting 1, which is what a security gate is for. Three of its four matches were real and are now fixed; the fourth is not a vulnerability at all."
      },
      {
        "type": "p",
        "text": "The pins were the problem. The scanner queries the *declared* version, so `tokio = \"1\"` was checked as tokio@1.0.0 and matched all eight advisories, including ones patched years ago. Verified against OSV:"
      },
      {
        "type": "p",
        "text": "tokio@1                    -> 8 advisories tokio@1.44.2               -> 0 tracing-subscriber@0.3.20  -> 0 bincode@1.3.3              -> 1 (informational)"
      },
      {
        "type": "p",
        "text": "Both crates still pass `cargo check` with the tighter pins; the ranges remain caret, so patch updates flow normally."
      },
      {
        "type": "p",
        "text": "RUSTSEC-2025-0141 against bincode is an \"unmaintained\" notice \u2014 severity None, `informational: \"unmaintained\"`, filed because the authors ceased development and consider 1.3.3 complete. It matches every 1.x release, so no upgrade can clear it. The scanner counted it as critical, which meant a permanently red build no action could fix \u2014 the fastest way to teach people to ignore a security gate. Advisories are now classified via OSV's affected[].database_specific.informational and informational ones are reported but do not block, matching how cargo audit treats warnings. Opt back in with report.failOnInformational. Real advisories still fail exactly as before, in every policy mode, and the classifier fails open so a network error cannot silently downgrade a genuine finding."
      },
      {
        "type": "p",
        "text": "Separately, Nexus-Security did not compile at all: tracing_subscriber::init() does not exist, it is tracing_subscriber::fmt::init(). Pre-existing and unrelated to the version bump \u2014 verified by reproducing it with the bump stashed. Nothing caught it because Nexus-Security is not in the rust-engines matrix."
      },
      {
        "type": "p",
        "text": "Tests drive the real batch_osv_queries through a stubbed transport rather than recomputing the expectation locally, and were checked by mutation: making every advisory blocking fails two of them. 19 pass."
      }
    ]
  },
  {
    "slug": "repair-three-apps-that-could-not-start-and-a-health-check-th",
    "title": "Repair three apps that could not start, and a health check that never matched",
    "date": "2026-08-09",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "core"
    ],
    "category": "Commit",
    "excerpt": "All four faults come from the same Phantom rollout and were invisible because the smoke job that exercises them had never once run.",
    "sha": "80b0890",
    "content": [
      {
        "type": "p",
        "text": "All four faults come from the same Phantom rollout and were invisible because the smoke job that exercises them had never once run."
      },
      {
        "type": "p",
        "text": "Three apps did not parse or load, so they never listened at all:"
      },
      {
        "type": "p",
        "text": "- Nexus-Search awaited phantom.start() inside a non-async createSearchServer. Made the function async and awaited it in index.ts and in the test, which had to move to Awaited<ReturnType<\u2026>>. - Nexus-Code had `phantom: phantom.status()` inserted after the health object's closing brace, producing `json({\u2026}, phantom: \u2026 };` \u2014 a syntax error. - Nexus-Accounting imported startNexusAccountingHeartbeat while cloud.ts exports startHeartbeat. Fixed the import rather than renaming the export, since every other app of this shape uses startHeartbeat."
      },
      {
        "type": "p",
        "text": "The fourth: smoke matched health with `\"status\":\"ok\"`, which cannot match the pretty-printed `\"status\": \"ok\"` that Auth, Guardian, Tunnel and Edge return. That is why those four reported \"health failed\" while being perfectly healthy \u2014 the same class of defect as the missing `grep`, a check that cannot pass. The pattern now tolerates whitespace and still rejects \"degraded\"."
      },
      {
        "type": "p",
        "text": "contract-test.sh additionally had an absolute path to one developer's machine baked into its python block, so it could only ever work there \u2014 and my own local verification passed for that reason rather than on merit. It now reads the exported APPS."
      },
      {
        "type": "p",
        "text": "Verified from a clean `git archive` export: all three apps start and return a health payload the new pattern matches, contract validation is 91/91 against the export's own apps directory, and typecheck is clean on all three."
      }
    ]
  },
  {
    "slug": "pin-team-chat-s-base-url-so-it-stops-publishing-a-dead-hostn",
    "title": "Pin Team-Chat's base URL so it stops publishing a dead hostname",
    "date": "2026-08-09",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "deploy"
    ],
    "category": "Commit",
    "excerpt": "Chat registered https://chat.nexussystems.vexr.dev with Cloud as its own upstream \u2014 a public hostname on the previous domain. Routing chat.tnhc.dev through the proxy therefore hung: the proxy takes the hostname from `ups",
    "sha": "77eda14",
    "content": [
      {
        "type": "p",
        "text": "Chat registered https://chat.nexussystems.vexr.dev with Cloud as its own upstream \u2014 a public hostname on the previous domain. Routing chat.tnhc.dev through the proxy therefore hung: the proxy takes the hostname from `upstream` and went out to external DNS for a name that no longer resolves here."
      },
      {
        "type": "p",
        "text": "The value does not come from anywhere obvious. deploy.sh never set NEXUS_TEAM_CHAT_BASE_URL, and the fallback in server.ts is the correct http://localhost:3109 \u2014 but bun auto-loads apps/Nexus-Team-Chat/.env from the app directory, and that file has carried the old domain since June. The unset variable resolved to a stale file rather than to the visible default, which is why the port immediately below it looked authoritative and was not."
      },
      {
        "type": "p",
        "text": "This is the same defect already fixed for NEXUS_AUTH_BASE_URL, from the same cause: an upstream is an address this machine can reach, never a public URL. Both are now pinned to 127.0.0.1 with the reasoning recorded at the call site."
      },
      {
        "type": "p",
        "text": "Found by testing the proxy path before asking for the tunnel routes to be repointed at it \u2014 chat returned 200 publicly the whole time, because public chat. bypasses the proxy and so never exercised the broken upstream."
      },
      {
        "type": "p",
        "text": "Verified: chat's registered upstream holds at http://127.0.0.1:3109 across seven heartbeat cycles, all three hosts return 200 through the proxy and publicly, and SSO still authenticates across subdomains."
      }
    ]
  },
  {
    "slug": "record-how-auth-s-seed-credentials-reach-it-and-why-not-via",
    "title": "Record how Auth's seed credentials reach it, and why not via env",
    "date": "2026-08-09",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "deploy"
    ],
    "category": "Commit",
    "excerpt": "The founder and operator accounts were still on the \"nexus-founder-2026\" and \"nexus-operator-2026\" literals in users.ts \u2014 published source in a public repo, on a host that became reachable from the internet the moment au",
    "sha": "0ef2afa",
    "content": [
      {
        "type": "p",
        "text": "The founder and operator accounts were still on the \"nexus-founder-2026\" and \"nexus-operator-2026\" literals in users.ts \u2014 published source in a public repo, on a host that became reachable from the internet the moment auth.tnhc.dev resolved. Both have now been rotated to generated values held in apps/Nexus-Auth/.env, which is gitignored."
      },
      {
        "type": "p",
        "text": "They are deliberately not added to the `env` line below. start_service cd's into the app directory and bun auto-loads .env from there, so the values reach the process without ever entering argv; anything passed through `env` is readable by any local user in `ps`. Verified: the running auth process has no credential in its arguments."
      },
      {
        "type": "p",
        "text": "Two traps recorded in the comment because both are easy to walk into. The seed only creates accounts that are absent, so exporting these does nothing to an existing store \u2014 that needs POST /api/v1/auth/users/:id/password, which is what the rotation used. And the fallback is silent: an unset variable does not warn, it just reinstates a password that anyone can read on GitHub."
      },
      {
        "type": "p",
        "text": "Verified against https://auth.tnhc.dev: both old defaults now return 401, both new passwords return 200."
      }
    ]
  },
  {
    "slug": "stop-deploying-production-on-an-unrecognised-argument",
    "title": "Stop deploying production on an unrecognised argument",
    "date": "2026-08-09",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "deploy"
    ],
    "category": "Commit",
    "excerpt": "The case matched only the ---prefixed spellings, so everything else fell to a default arm that ran cmd_start and then blocked in a foreground loop. That made `deploy.sh status` \u2014 the spelling anyone tries first, and the ",
    "sha": "1dd1cd0",
    "content": [
      {
        "type": "p",
        "text": "The case matched only the ---prefixed spellings, so everything else fell to a default arm that ran cmd_start and then blocked in a foreground loop. That made `deploy.sh status` \u2014 the spelling anyone tries first, and the one I tried \u2014 silently deploy, and gave every typo the same power. A command that reports is not one that should mutate."
      },
      {
        "type": "p",
        "text": "Unknown arguments now print usage to stderr and exit 2 without touching anything. The bare words start/stop/status are accepted alongside the flags, since the flags being the only valid form was what made the wrong guess so easy, and -h/--help/help print the usage. Running with no argument still starts in the foreground, which is the documented interactive behaviour and the one case where starting is what was asked for."
      },
      {
        "type": "p",
        "text": "Verified against the live stack: `status` reports, `statsu` exits 2 with usage, `--status` and `--help` behave, and the four service PIDs are unchanged throughout \u2014 the typo path started nothing."
      }
    ]
  },
  {
    "slug": "move-sign-in-to-auth-tnhc-dev-the-apex-is-the-marketing-site",
    "title": "Move sign-in to auth.tnhc.dev \u2014 the apex is the marketing site",
    "date": "2026-08-09",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "Single sign-on was broken in production while verifying clean locally. Every app sends an unauthenticated browser to <apex>/login?redirect=\u2026, but the apex is served by the marketing site on Cloudflare Pages, which never ",
    "sha": "d449457",
    "content": [
      {
        "type": "p",
        "text": "Single sign-on was broken in production while verifying clean locally. Every app sends an unauthenticated browser to <apex>/login?redirect=\u2026, but the apex is served by the marketing site on Cloudflare Pages, which never reaches this tunnel: https://tnhc.dev/login returns the marketing SPA, with no login form anywhere on it. auth.tnhc.dev, the proxy's other sign-in host, did not resolve at all. So the door existed and nothing could reach it."
      },
      {
        "type": "p",
        "text": "Local testing could not have caught this. It drives the proxy directly with curl -H \"Host: tnhc.dev\", which renders the real page \u2014 the failure lives entirely in Cloudflare's edge routing, above the layer under test."
      },
      {
        "type": "p",
        "text": "NEXUS_AUTH_PUBLIC_URL is now exported as https://auth.$DOMAIN, under the name the apps already read, so every service started here inherits it rather than falling back to NEXUS_AUTH_URL \u2014 an internal address a browser cannot use. Deploy and Vault needed no code change; they have taken this variable since they were put on ecosystem SSO."
      },
      {
        "type": "p",
        "text": "NEXUS_AUTH_BASE_URL is pinned to http://127.0.0.1:4310 and documented as an upstream rather than a browser address. It is the only use Auth makes of it: the value becomes `upstream` in Cloud's routing table, and the proxy takes its hostname from there. Pointing it at https://auth.$DOMAIN \u2014 the obvious edit when moving the sign-in host \u2014 would make the proxy answer auth.$DOMAIN by fetching auth.$DOMAIN, out through Cloudflare, into the tunnel and back into itself. It previously read https://tnhc.dev, which was the same mistake pointed somewhere harmless enough to go unnoticed."
      },
      {
        "type": "p",
        "text": "The proxy keeps its apex fallback for local runs that have no Pages site in front, but the comments no longer claim the apex is the front door; depending on that is what produced this. Its /health, gated on the host not being ours so cloud.$DOMAIN/health still proxies through, replaces a check that reported the proxy dead whenever it was alive."
      },
      {
        "type": "p",
        "text": "Verified through the proxy: auth.tnhc.dev/login renders the form, a cross-subdomain ?redirect= survives into the form, ?redirect=https://evil.example is still stripped, and posting credentials returns 303 with Location to vault.tnhc.dev and a cookie scoped Domain=.tnhc.dev. No route publishes a public hostname as an upstream. Still needs the auth.tnhc.dev public hostname on the tunnel to be reachable from outside."
      }
    ]
  },
  {
    "slug": "relay-redirects-and-rebuild-forwarded-headers-serve-the-apex",
    "title": "Relay redirects and rebuild forwarded headers; serve the apex",
    "date": "2026-08-09",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "proxy"
    ],
    "category": "Commit",
    "excerpt": "Three defects, the first two of which broke every redirect and every form POST in the ecosystem, not just sign-in.",
    "sha": "1ac26ba",
    "content": [
      {
        "type": "p",
        "text": "Three defects, the first two of which broke every redirect and every form POST in the ecosystem, not just sign-in."
      },
      {
        "type": "p",
        "text": "1. fetch defaults to redirect: \"follow\", so the proxy chased upstream 3xx responses itself and handed the client whatever it landed on. The sign-in POST returns 303 with Set-Cookie; following it here swallowed both, converted the POST into a GET, and returned the login page with 200 \u2014 a correct login looked like a failed one. A reverse proxy must relay redirects, not resolve them. Now redirect: \"manual\"."
      },
      {
        "type": "p",
        "text": "2. The body is re-read into a buffer before forwarding, so the inbound framing headers no longer describe it, yet content-length and host were passed through unchanged. Upstreams read a truncated or empty payload \u2014 a form POST arrived with no fields, and the handler behaved as though nothing had been submitted. content-length, host, connection and transfer-encoding are dropped so the runtime recomputes them, and x-forwarded-host / x-forwarded-proto are set so upstreams can still tell who they are answering as."
      },
      {
        "type": "p",
        "text": "3. The apex 404'd. It is the ecosystem's front door and now the sign-in page \u2014 every app sends an unauthenticated browser to https://<DOMAIN>/login?redirect=\u2026 so the bare domain has to resolve somewhere. Both the apex and auth.<DOMAIN> now fall back to Nexus-Auth."
      },
      {
        "type": "p",
        "text": "deploy.sh never started Nexus-Auth, which would have broken single sign-on the moment it deployed: Cloud, Deploy and Vault all verify sessions there and none of them holds accounts any more. It now starts first, with NEXUS_AUTH_COOKIE_DOMAIN=\".$DOMAIN\" \u2014 the leading dot is what scopes the session cookie to the parent domain so one login reaches every subdomain. Cloud is passed NEXUS_AUTH_URL, and auth joins the stop/status lists and health checks."
      },
      {
        "type": "p",
        "text": "Verified: posting credentials to the apex through the proxy returns 303 carrying both Set-Cookie and Location; a wrong password returns 401; and a real session token reaches Deploy through the proxy as either a cookie or a bearer, 200 both ways."
      },
      {
        "type": "p",
        "text": "One testing note for whoever repeats this locally: curl will not store a Domain=.localhost cookie, because localhost is treated as a public suffix, so a jar-based end-to-end check appears to fail even when the flow is correct. Pass the cookie explicitly, or test against a real domain. This does not affect .tnhc.dev."
      }
    ]
  },
  {
    "slug": "apex-sign-in-page-with-validated-redirect-back",
    "title": "Apex sign-in page with validated redirect-back",
    "date": "2026-08-09",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "The last piece of the one-login model. Each app still had to present its own form, which is both what users complained about and why parallel identity systems kept appearing. GET /login is now the single place a human ty",
    "sha": "49a3ee2",
    "content": [
      {
        "type": "p",
        "text": "The last piece of the one-login model. Each app still had to present its own form, which is both what users complained about and why parallel identity systems kept appearing. GET /login is now the single place a human types a password, and apps that receive an unauthenticated browser navigation send it here with ?redirect=<where they were going>."
      },
      {
        "type": "p",
        "text": "Server-rendered form, POST back to /login, 303 onward. That way the browser gets Set-Cookie on a top-level navigation and follows a redirect with GET, with no client-side token handling anywhere. Arriving already signed in skips the form and honours the redirect immediately, rather than asking for a password that is not needed."
      },
      {
        "type": "p",
        "text": "safeRedirect refuses anything that is not same-site. An unvalidated redirect parameter is an open redirect: an attacker sends a link to the real, correctly certificated login page carrying ?redirect=https://evil.example, the victim signs in for real, and lands wherever the attacker chose with the trust of having just authenticated. Relative paths pass, protocol-relative \"//evil.example\" does not (browsers treat it as absolute), and absolute URLs must sit at or under the configured cookie domain. With no cookie domain \u2014 the local default \u2014 only relative paths are allowed."
      },
      {
        "type": "p",
        "text": "Also decouples Secure from Domain, which were conflated. They answer different questions: NEXUS_AUTH_COOKIE_SECURE still defaults to on whenever a cookie domain is set, but can be turned off to test cross-subdomain sign-on locally over http. A browser silently refuses to store a Secure cookie on an insecure origin, so the old coupling made that test impossible \u2014 login would appear to succeed and the user would arrive still signed out. The logout cookie now mirrors the same attributes, or the browser treats it as a different cookie and the session survives the logout."
      },
      {
        "type": "p",
        "text": "Verified with NEXUS_AUTH_COOKIE_DOMAIN=.localhost: the page renders with the redirect preserved; ?redirect=https://evil.example is stripped entirely; posting credentials returns 303 with Location back to Deploy and a cookie scoped Domain=.localhost; and that single cookie then returns 200 from Cloud /api/v1/auth/me, Deploy /api/projects and Vault /api/audit."
      }
    ]
  },
  {
    "slug": "stop-publishing-the-signing-key-sign-service-tokens-with-rs2",
    "title": "Stop publishing the signing key \u2014 sign service tokens with RS256",
    "date": "2026-08-09",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "The JWKS endpoint served NEXUS_AUTH_TOKEN_SECRET as the `k` member of an `oct` key. JWKS is unauthenticated by design, because its purpose is handing out verification material \u2014 but under HS256 the verification key *is* ",
    "sha": "87360ee",
    "content": [
      {
        "type": "p",
        "text": "The JWKS endpoint served NEXUS_AUTH_TOKEN_SECRET as the `k` member of an `oct` key. JWKS is unauthenticated by design, because its purpose is handing out verification material \u2014 but under HS256 the verification key *is* the signing key. Confirmed against the running service: an anonymous GET /api/v1/auth/oauth/jwks returned base64url(\"nexus-auth-dev-secret\"). Anyone who could reach that endpoint could mint service tokens for the entire ecosystem, and on auth.tnhc.dev it would be reachable from the internet."
      },
      {
        "type": "p",
        "text": "Service tokens are now RS256. The private key never leaves this process; JWKS publishes only { kty: RSA, use, alg, kid, n, e }. Verifiers can check a token without gaining the ability to issue one, which is also what makes the scheme safe for self-hosted apps: three apps already depend on this identity service and the cost of changing only grows."
      },
      {
        "type": "p",
        "text": "src/keys.ts resolves key material in order: NEXUS_AUTH_JWT_PRIVATE_KEY (inline PEM), NEXUS_AUTH_JWT_PRIVATE_KEY_FILE (mounted secret), else it generates a 2048-bit key on first run and persists it to data/jwt-private-key.pem. Persisting matters \u2014 regenerating per boot would invalidate every issued token on restart. The kid is an RFC 7638-style thumbprint of the public key, so it changes when the key does. RSA rather than Ed25519 deliberately: `kty: \"RSA\"` is understood by every JWT library, and this is a contract third parties are meant to integrate against."
      },
      {
        "type": "p",
        "text": "validateServiceToken now pins the algorithm instead of trusting the token's own header. Accepting whatever `alg` a token declares is the classic JWT confusion attack \u2014 downgrade to \"none\", or to HMAC using the public modulus as the shared secret, which the old JWKS made trivial by publishing that modulus."
      },
      {
        "type": "p",
        "text": "Verified against the running service: issuance produces alg RS256 with a kid matching JWKS; a valid token validates; a token with its scopes edited to service:admin is rejected as invalid-signature; a token forged HS256-style from the published JWKS material is rejected; and an alg:none token is rejected."
      },
      {
        "type": "p",
        "text": "One caveat worth recording: the generated key is written 0600, but this checkout lives on a filesystem that does not honour Unix permissions, so it lands 0777 here. On a real deployment supply the key through NEXUS_AUTH_JWT_PRIVATE_KEY or a mounted file rather than relying on the generated one."
      }
    ]
  },
  {
    "slug": "issue-a-shared-session-cookie-so-one-login-covers-the-ecosys",
    "title": "Issue a shared session cookie so one login covers the ecosystem",
    "date": "2026-08-09",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "feat",
      "auth"
    ],
    "category": "Commit",
    "excerpt": "Nexus-Auth only read credentials from an Authorization header or a ?token= query parameter. A browser cannot attach a header to an ordinary navigation, so there was no way for a signed-in user to arrive at another app al",
    "sha": "ad5eff3",
    "content": [
      {
        "type": "p",
        "text": "Nexus-Auth only read credentials from an Authorization header or a ?token= query parameter. A browser cannot attach a header to an ordinary navigation, so there was no way for a signed-in user to arrive at another app already authenticated \u2014 which is why Cloud, Deploy and Vault each grew a private login, and why creating an account in one left you facing a signup in the next."
      },
      {
        "type": "p",
        "text": "Login now also sets a `nexus_session` cookie, extractToken reads it after Bearer so API clients still win, and logout clears it as well as revoking the session server-side."
      },
      {
        "type": "p",
        "text": "NEXUS_AUTH_COOKIE_DOMAIN holds the parent domain with its leading dot (\".tnhc.dev\"), which is what lets deploy.tnhc.dev and chat.tnhc.dev see a single session \u2014 the reason the subdomain layout matters, since separate domains cannot share a cookie at all. Unset, no Domain attribute is emitted and the cookie stays host-only, correct for a localhost dev box. Secure is added only alongside a cookie domain, since forcing it locally would make the cookie invisible over plain http. SameSite=Lax rather than Strict, because the redirect back from an apex login page is a top-level navigation that Strict would strip."
      },
      {
        "type": "p",
        "text": "Max-Age derives from the session's own expiresAt, so the cookie cannot outlive the session it points at."
      },
      {
        "type": "p",
        "text": "Also fixes jsonResponse, which spread `init` and then replaced `headers` wholesale \u2014 every header a caller passed was silently dropped, which made Set-Cookie impossible until now."
      },
      {
        "type": "p",
        "text": "Verified: login returns Set-Cookie; that cookie alone authenticates /api/v1/auth/check with no Authorization header; no cookie is 401; after logout the same cookie is rejected."
      },
      {
        "type": "p",
        "text": "The four `// pragma: allowlist secret` markers sit on lines reading password fields out of a request body (password, currentPassword, newPassword). They hold no values; the scanner matches on the identifier."
      }
    ]
  },
  {
    "slug": "on-demand-tls-gated-by-cloud-s-tls-ask-endpoint",
    "title": "On-demand TLS gated by Cloud's tls-ask endpoint",
    "date": "2026-08-08",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "deploy"
    ],
    "category": "Commit",
    "excerpt": "Cloud has shipped /api/v1/routes/tls-ask all along \u2014 its docstring says Caddy should call it before issuing a certificate for a new subdomain \u2014 but the Caddyfile listed three hosts statically, so a newly registered app g",
    "sha": "413dd13",
    "content": [
      {
        "type": "p",
        "text": "Cloud has shipped /api/v1/routes/tls-ask all along \u2014 its docstring says Caddy should call it before issuing a certificate for a new subdomain \u2014 but the Caddyfile listed three hosts statically, so a newly registered app got a working proxy route and no certificate. This wires the two together, which is what lets an app become reachable over HTTPS without editing this file or restarting Caddy."
      },
      {
        "type": "p",
        "text": "Shape: - global on_demand_tls { ask http://127.0.0.1:8787/... }. The endpoint is a GET and Cloud only authenticates POST/PATCH/DELETE, so Caddy needs no credential \u2014 it could not send one anyway. - apex plus cloud./chat. keep startup-issued certificates. They are served from the proxy's static fallback rather than Cloud's routing table, so tls-ask would not vouch for them, and it rejects the apex outright since it only allows names *under* the cloud domain. - *.tnhc.dev serves everything else with `tls { on_demand }`. - proxy/header/log behaviour moved into a (nexus_common) snippet so the two site blocks cannot drift apart."
      },
      {
        "type": "p",
        "text": "Cert-bomb protection is Cloud's: tls-ask answers 200 only for a domain present in listActiveRoutes(), which already excludes anything denied, suspended or quarantined by Guardian. No interval/burst limits needed."
      },
      {
        "type": "p",
        "text": "Verified, not assumed: - caddy validate: \"Valid configuration\". The adapted JSON puts *.tnhc.dev in its own automation policy with on_demand:true, so Caddy defers to per-name issuance at handshake instead of queueing a wildcard cert that would need a DNS challenge, and registers the ask endpoint under automation.on_demand.permission. - against a real Cloud on an isolated registry: registering an app and requesting a website address produces route notes.tnhc.dev -> http://127.0.0.1:3210, the proxy serves it end to end (200 from the actual backend), and tls-ask flips from 403 to 200 for that exact name while an unissued name, a name outside the cloud domain, and the apex all stay 403. Missing ?domain= is a 400."
      },
      {
        "type": "p",
        "text": "deploy.sh: adopt NEXUS_CLOUD_API_KEY from apps/Nexus-Cloud/.env when nothing is exported. That gitignored file is where the key already lives and bun auto-loads it, so the assertion added in 435988a3 would have refused to start a correctly configured deployment. An exported value still wins, and a genuinely absent key still stops the deploy."
      }
    ]
  },
  {
    "slug": "dynamic-proxy-routing-never-resolved-an-upstream",
    "title": "Dynamic proxy routing never resolved an upstream",
    "date": "2026-08-08",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "deploy"
    ],
    "category": "Commit",
    "excerpt": "Cloud returns `upstream` as a full URL, protocol included \u2014 the Caddy config endpoint strips `^https?://` off the same field. buildRouteMap prefixed it anyway, producing \"http://http://127.0.0.1:8787\", whose URL hostname",
    "sha": "435988a",
    "content": [
      {
        "type": "p",
        "text": "Cloud returns `upstream` as a full URL, protocol included \u2014 the Caddy config endpoint strips `^https?://` off the same field. buildRouteMap prefixed it anyway, producing \"http://http://127.0.0.1:8787\", whose URL hostname parses as \"http\" and port as \"\". Every Cloud-supplied route was dialled as https://http/<path>, which hangs until the client gives up. Worse, the static fallback is guarded by `if (!upstreamUrl)`, so a route existing in Cloud actively broke a host the fallback would have served. Use normalizeUpstream, which only adds a scheme when one is missing."
      },
      {
        "type": "p",
        "text": "Cloud keys its routing table by full hostname (publicAddress minus the scheme), so the exact-match lookup already covers every route it can return. The wildcard tier below it looked up routes[subdomain] with a bare label like \"cloud\" that the map never contains, and got there via a getSubdomain that returned \"\" for all input anyway \u2014 substring(0, -n) clamps to 0. Redundant rather than repairable: removed with getSubdomain. The www branch went too; the line above it already strips the prefix."
      },
      {
        "type": "p",
        "text": "Also in the proxy: - drop the unused node:path import, type routeCache, default DOMAIN to tnhc.dev to match the rest of the deployment - implement the POLL_INTERVAL_MS refresh the startup banner has always advertised, so requests never pay the fetch latency and a new subdomain resolves without waiting for a request to trip the TTL"
      },
      {
        "type": "p",
        "text": "deploy.sh: pin NEXUS_CLOUD_DOMAIN to $DOMAIN. It is the base Cloud mints public subdomains under, keys /api/v1/routes by, and the only suffix tls-ask will authorise a cert for. Unset it defaults to \"nexus.local\", so Cloud published *.nexus.local routes that the proxy rejects as foreign hosts \u2014 dynamic routing could not have worked even with the upstream bug fixed. Also pass CF_API_TOKEN, CF_ZONE_ID and SERVER_PUBLIC_IP through when set, so Cloud can create its own DNS records; empty means off."
      },
      {
        "type": "p",
        "text": "Verified against a stub Cloud serving the real payload shape: the mapped route proxies 200 to its backend, the www variant follows it, and unknown subdomains and foreign hosts still 404. The pre-fix file, same harness, hangs the request until timeout."
      }
    ]
  },
  {
    "slug": "finish-the-root-script-reorg-2228cecc-left-half-done",
    "title": "Finish the root script reorg 2228cecc left half-done",
    "date": "2026-08-08",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "refactor",
      "core"
    ],
    "category": "Commit",
    "excerpt": "2228cecc copied the root scripts into scripts/demo and scripts/test instead of moving them, so HEAD carried two copies of all ten and the root still looked like the canonical location. Remove the root copies and repoint ",
    "sha": "dd7e0a3",
    "content": [
      {
        "type": "p",
        "text": "2228cecc copied the root scripts into scripts/demo and scripts/test instead of moving them, so HEAD carried two copies of all ten and the root still looked like the canonical location. Remove the root copies and repoint the docs that still invoked them."
      },
      {
        "type": "p",
        "text": "- delete the 10 root *.sh originals (twins already tracked under scripts/demo, scripts/test, and scripts/run-all.sh) - move NEXUS_ROUTER_IMPLEMENTATION_SUMMARY.md into docs/ - repoint README.md, docs/QUICKSTART.md and deploy/preflight-check.sh at the new paths - add scripts/check.sh, which fans the per-app check.sh gates out over apps/Nexus-*/ (15 of them have one)"
      },
      {
        "type": "p",
        "text": "scripts/check.sh cd'd to its own directory before globbing apps/Nexus-*/, which matched nothing and made the script report ALL PASSED without running a single gate. It cds to the repo root now."
      }
    ]
  },
  {
    "slug": "chapter-73-a-cut-that-can-bend",
    "title": "Chapter 73 \u2014 a cut that can bend",
    "date": "2026-08-02",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "Generalising cutFaceBetween to a chain, so the single-edge cut becomes the N=0 case and the whole existing suite exercises the new path. Euler-neutral for any N; honest about the chain being straight between samples, and",
    "sha": "d28a5ee",
    "content": [
      {
        "type": "p",
        "text": "Generalising cutFaceBetween to a chain, so the single-edge cut becomes the N=0 case and the whole existing suite exercises the new path. Euler-neutral for any N; honest about the chain being straight between samples, and about why a seam SHARED exactly matters more here than a seam that is exact."
      }
    ]
  },
  {
    "slug": "cut-a-face-along-a-polyline-the-seam-a-traced-quartic-produc",
    "title": "Cut a face along a polyline \u2014 the seam a traced quartic produces",
    "date": "2026-08-02",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "The measured gap is unchanged and still the largest: 35.2% of chained boolean steps decline with UnexpressibleSeam, about five times the next one. The tracer that answers those cases landed in a6191fe0 and returns POLYLI",
    "sha": "f8d270c",
    "content": [
      {
        "type": "p",
        "text": "The measured gap is unchanged and still the largest: 35.2% of chained boolean steps decline with UnexpressibleSeam, about five times the next one. The tracer that answers those cases landed in a6191fe0 and returns POLYLINES, because a quartic has no closed form to put in a Curve. The imprint could only cut with a single edge carrying a Line or a Circle. This is the missing primitive between them."
      },
      {
        "type": "p",
        "text": "cutFaceBetween now takes an optional list of interior points and builds a CHAIN rather than one edge: N interior points become N vertices, N+1 edges and one new face, so dV - dE + dF = N - (N+1) + 1 = 0 and the Euler characteristic is untouched. Loop A closes with the chain traversed backwards, loop B forwards, and the two traversals of each edge are partners \u2014 with N = 0 that is exactly the dA/dB pair it has always built, so splitFace and the Line/Circle imprint go through the same code and the existing 2682 tests exercise it unchanged."
      },
      {
        "type": "p",
        "text": "Exposed as Body::cutFaceAlongPolyline. No new public header, so the API-freeze manifest is untouched."
      },
      {
        "type": "p",
        "text": "Honest about what it is: the chain is straight between consecutive samples, so the seam is only as faithful as the trace's sag budget. What matters is that BOTH operands can be cut along the SAME sample list \u2014 a seam shared exactly is what lets the sew close, and the fidelity is a separate tunable number."
      },
      {
        "type": "p",
        "text": "Verified as an operator, not wired into the imprint yet \u2014 the same order the tracer and intersectSurfaces were built in. Tests assert the properties that define a cut rather than that it ran: Euler neutrality at N = 0, 1, 2 and 5; both validators clean and the shell still closed; volume and surface area unchanged to 1e-9, since an imprint segments a boundary and must not alter the solid; every interior sample present as a vertex, so the chain cannot quietly straighten into a chord; each side walking the whole chain exactly once; and adjacent or unknown vertices refused without touching the body."
      },
      {
        "type": "p",
        "text": "Three of the six fail if the chain is truncated to its first edge."
      },
      {
        "type": "p",
        "text": "2690/2690 via ctest."
      }
    ]
  },
  {
    "slug": "chapter-72-searching-for-the-shape-of-a-lie",
    "title": "Chapter 72 \u2014 searching for the shape of a lie",
    "date": "2026-08-02",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "The accident of chapter 71 turned into a method: grep the suite for assertions no output can violate. Five hits \u2014 one routine that had never returned a valid answer (TrimBoolean, every non-empty result of zero area), two",
    "sha": "19665f2",
    "content": [
      {
        "type": "p",
        "text": "The accident of chapter 71 turned into a method: grep the suite for assertions no output can violate. Five hits \u2014 one routine that had never returned a valid answer (TrimBoolean, every non-empty result of zero area), two weak tests over correct code, two vacuous checks where a sharp one was free."
      }
    ]
  },
  {
    "slug": "trimboolean-returned-zero-area-bowties-found-by-sweeping-for",
    "title": "TrimBoolean returned zero-area bowties \u2014 found by sweeping for  assertions that cannot fail",
    "date": "2026-08-02",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "C37 found a broken routine behind EXPECT_GE(size(), 0u) by accident. This is the same signature searched for on purpose, across the whole suite. Five hits. One was a real defect, two were weak tests over correct code, tw",
    "sha": "f8a53b3",
    "content": [
      {
        "type": "p",
        "text": "C37 found a broken routine behind EXPECT_GE(size(), 0u) by accident. This is the same signature searched for on purpose, across the whole suite. Five hits. One was a real defect, two were weak tests over correct code, two were both."
      },
      {
        "type": "p",
        "text": "THE DEFECT \u2014 TrimBoolean."
      },
      {
        "type": "p",
        "text": "Every non-empty result it ever returned had an enclosed area of exactly ZERO."
      },
      {
        "type": "p",
        "text": "extractBoundary() was not a boundary tracer. It scanned the mask row by row and pushed the first and last cell of each horizontal RUN into a \"loop\". On the union of two 2x2 squares that gives the four CORRECT corners in the order bottom-left, bottom-right, top-LEFT, top-right \u2014 a self-intersecting bowtie, whose shoelace area is zero. Interior rows contribute nothing because their runs have length 1 and are skipped, which is why exactly four points came back."
      },
      {
        "type": "p",
        "text": "Two consequences beyond the area. It returned a SINGLE loop, so a union of two disjoint regions could not be expressed at all. And extractInnerLoops() flood- filled holes only to hand each one to the same extractor and then std::reverse an unordered bag of points, which is not a winding."
      },
      {
        "type": "p",
        "text": "Replaced with a cell-boundary walk: emit each filled/empty cell side as a DIRECTED edge with the material on its left, then link head-to-tail. Every lattice corner then has equal in- and out-degree, so the edges close into loops on their own \u2014 outer counter-clockwise, holes clockwise, which is how they are now classified. Holes need no separate pass. Collinear runs are merged, so an axis-aligned rectangle comes back as four points rather than a 512-step staircase."
      },
      {
        "type": "p",
        "text": "Measured against exact areas (gridRes 512, so ~0.2-0.7% raster error):"
      },
      {
        "type": "p",
        "text": "A u A                 0.0000 -> 0.9977   (expect 1) 2x2 u 2x2 offset 1    0.0000 -> 5.9859   (expect 6) 2x2 n 2x2 offset 1    0.0000 -> 1.9867   (expect 2) disjoint union        1 loop  -> 2 loops, 7.9468 (expect 8) 4x4 minus centred 2x2 0.0000 -> 11.9718, outer CCW + inner CW (expect 12)"
      },
      {
        "type": "p",
        "text": "Empty results were already correct and stay correct."
      },
      {
        "type": "p",
        "text": "THE WEAK TESTS, measured and found sound \u2014 worth recording, because \"the test cannot fail\" does not imply \"the code is wrong\":"
      },
      {
        "type": "p",
        "text": "* FeatureLineExtractor: correct. A 2x2x2 box gives total feature length exactly 24.0000 with every point on a cube edge, at every threshold below 90 degrees, and nothing at 91. The test asserted size() > 0, and its sphere case was named HasFeatures while asserting size() >= 0. Now pinned to 24. * BooleanOperation preserveNormals: correct. 16 unit normals with the flag on, none with it off. The old assertion was EXPECT_GE(vertexCount(), 0) INSIDE an if (vertexCount() > 0). * ModelingShell: a capsule is closed, so its boundary-edge count is exactly 0, not \">= 0\"; an open plane reports 4. Both now pinned, because a counter that is always zero would satisfy the first check alone. * GPUAllocator: BudgetIsNonNegative on an unsigned value. Now asserts the relationship that is actually knowable \u2014 nothing allocated yet, and allocated never exceeding a set budget."
      },
      {
        "type": "p",
        "text": "No occurrence of the pattern remains in the suite. Eight of the eleven new TrimBoolean tests fail against the previous implementation."
      },
      {
        "type": "p",
        "text": "2684/2684 via ctest."
      }
    ]
  },
  {
    "slug": "chapter-71-the-assertion-that-could-not-fail",
    "title": "Chapter 71 \u2014 the assertion that could not fail",
    "date": "2026-08-02",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "EXPECT_GE(size(), 0u) as the load-bearing assertion of a NURBS surface intersector; the six defects it hid; and the one that took longest \u2014 a Newton residual that folded in the projection's own in-surface error and so wa",
    "sha": "5e9bf0b",
    "content": [
      {
        "type": "p",
        "text": "EXPECT_GE(size(), 0u) as the load-bearing assertion of a NURBS surface intersector; the six defects it hid; and the one that took longest \u2014 a Newton residual that folded in the projection's own in-surface error and so walked correct points off the curve."
      }
    ]
  },
  {
    "slug": "the-nurbs-surface-intersector-behind-a-test-that-could-not-f",
    "title": "The NURBS surface intersector, behind a test that could not fail",
    "date": "2026-08-02",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "size() is unsigned, so that line is true of every possible outcome \u2014 and it was the load-bearing assertion of a test named PerpendicularPlanesIntersectionRunsWithoutError. Two perpendicular planes meet in a line whose eq",
    "sha": "3dd9f0c",
    "content": [
      {
        "type": "h",
        "text": "EXPECT_GE(branches.size(), 0u);"
      },
      {
        "type": "p",
        "text": "size() is unsigned, so that line is true of every possible outcome \u2014 and it was the load-bearing assertion of a test named PerpendicularPlanesIntersectionRunsWithoutError. Two perpendicular planes meet in a line whose equation is known outright; nothing checked where the answer went. Measured against that line, the routine returned THIRTY-TWO curves and 3186 points for one straight segment, covering 0.119 of it, with two of the curves running backwards and one that never moved at all."
      },
      {
        "type": "p",
        "text": "Six defects, each measured before and after:"
      },
      {
        "type": "p",
        "text": "1. STEP SIZE. The parameter step divided both components by |dA/du|^2 * |dA/dv|^2 \u2014 the PRODUCT of two squared lengths. Dimensionally wrong, and correct only for a unit-speed parameterisation, which is exactly what a hand-made test plane is. On the 3x3 fixture |dA/du| = 3, so every step came out 9x short: predicted 0.111 of the line in 100 steps, measured 0.119. Replaced with the 2x2 Gram solve for du*dA/du + dv*dA/dv = h*dir, which is also right for a NON-ORTHOGONAL parameterisation."
      },
      {
        "type": "p",
        "text": "2. ONE DIRECTION ONLY. A seed in the middle of an open curve returned half of it. Now marched both ways, with a tangent-continuity check, because nA x nB has an arbitrary sign that can flip between evaluations \u2014 the cause of the backwards curves."
      },
      {
        "type": "p",
        "text": "3. NO CLOSURE TEST. Every curve ran to its full step budget; all 32 had exactly 101 points."
      },
      {
        "type": "p",
        "text": "4. NO SEED DEDUPLICATION. One curve per seed, so one line came back 32 times."
      },
      {
        "type": "p",
        "text": "5. SEED ACCEPTANCE WAS A FIXED ABSOLUTE DISTANCE (0.105 model units, from d2 < 0.01*(1-|cos|)+0.001). The flat fixtures pass because the grid lands on the intersection. A curved one does not: for z = x^2 cut by z = 1 the nearest grid column sits at |x^2-1| = 0.129, so NO seed qualified and a real two-branch intersection was reported as NO INTERSECTION AT ALL. Now: accept within one grid CELL, then verify the refined point is really on both surfaces. Generosity is safe once the answer is checked."
      },
      {
        "type": "p",
        "text": "6. THE NEWTON RESIDUAL WAS THE WRONG VECTOR. It used the whole (pa - b.evaluate( ub,vb)), which folds in the closest-point projection's own IN-SURFACE error, so refinement chased a tangential residual. Instrumented: a sample sitting at x-1 = 0.000e+00 reported a residual of 2.25e-05 and one pass moved it to -4.46e-05 \u2014 the refinement was introducing the error, which is why 40 iterations gave a worse curve than 10. Taking only the component along B's normal took the curved case from 2.70e-04 to 1.19e-07, one ULP at unit scale."
      },
      {
        "type": "p",
        "text": "Along the way the projection and the NURBS derivatives were both measured against exact oracles and are correct (2.4e-07 and exact respectively) \u2014 worth recording, since they were the first two suspects."
      },
      {
        "type": "p",
        "text": "Defaults are now non-positive meaning \"proportion it to the model\", so one call behaves the same at 0.5 mm and 5 km; a fixed 0.01 step cannot."
      },
      {
        "type": "p",
        "text": "Net on the known-line oracle: 32 curves / 3186 points / 4% of the line -> 1 curve / 60 points / all of it. Curved (z = x^2 cut by z = 1): no answer -> both branches, to 1.19e-07."
      },
      {
        "type": "p",
        "text": "The tests are rewritten to assert the defining properties \u2014 branch count, the equation each branch lies on, how far it runs, scale-invariance at 1000x, and bitwise determinism. Five of the seven fail against the previous implementation."
      },
      {
        "type": "p",
        "text": "2681/2681 via ctest."
      }
    ]
  },
  {
    "slug": "give-every-published-artifact-a-source-in-the-repo-and-re-me",
    "title": "Give every published artifact a source in the repo, and re-measure the stale ones",
    "date": "2026-08-02",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "All four artifacts had gone weeks without an update. The Logbook was 44 chapters behind its own markdown; the roadmap was three weeks stale on facts that are checkable in thirty seconds. The cause was the same for all of",
    "sha": "99b54a6",
    "content": [
      {
        "type": "p",
        "text": "All four artifacts had gone weeks without an update. The Logbook was 44 chapters behind its own markdown; the roadmap was three weeks stale on facts that are checkable in thirty seconds. The cause was the same for all of them: they were hand-built pages living only on the host, so \"update the artifact\" meant \"re-fetch the HTML and patch it by hand\" \u2014 a step that quietly stops happening."
      },
      {
        "type": "p",
        "text": "LOGBOOK \u2014 now GENERATED, so it cannot silently drift again. render_logbook.py emits a second body-only build for publishing (docs/kernel-logbook.artifact.html), since the host supplies the document shell and its own theme switch. Both builds are written on every run and --check fails if EITHER is behind the markdown \u2014 a staleness check that only watched the standalone file would have kept reporting \"up to date\" throughout."
      },
      {
        "type": "p",
        "text": "Three real fixes fell out of doing it:"
      },
      {
        "type": "p",
        "text": "- Part introductions were being routed to doc.preamble, because the parser's sink was \"current chapter, else preamble\" and a Part heading clears the chapter. All five Parts' openings were printed in a heap at the top of the book, before Part I began. They now belong to their Part. - The generated page was plainer than the hand-built one it replaces, so the generator was brought up to it rather than regressing the design: title page, dot-leader contents, centred Part dividers carrying their own introduction, large chapter numerals with a Part kicker, drop caps, mono labels. - Artifact theming needs BOTH data-theme overrides. The host stamps data-theme on the root and that must beat prefers-color-scheme in both directions; with only the dark rule, a reader who forces light mode on a dark-mode machine gets the dark palette."
      },
      {
        "type": "p",
        "text": "THE OTHER THREE now have sources under docs/artifacts/ with a README covering the no-document-shell and dual-theme rules."
      },
      {
        "type": "p",
        "text": "- Foundation inspection: F6 revised. The surface-intersection table is 11 pairs, not 4; the Unsupported/None switch-arm defect and the diagnostic that measured it are recorded, along with the tracer and the fact it is not yet wired into the imprint. - Parity index: added a foundation-depth row for the analytic B-rep SSI, and marked the increment timeline retired at #59 with a pointer to the Logbook \u2014 it is superseded by directive, and a reader could otherwise conclude work stopped there. - nexus-roadmap: status re-measured against the tree rather than trusted. Kernel 1921 -> 2677 tests. The editor shell is NOT broken any more \u2014 EditorUI.cpp and AppMode.cpp compile as kernel-target sources; the gate moved to wiring, because the top-level CMakeLists adds only src/kernel and tests, so runtime/ and tools/modeler/ never build and no binary is produced. Phase 0 re-scoped accordingly, and hover pre-highlight goes from \"none\" to partial because Viewport::updateHover exists."
      },
      {
        "type": "p",
        "text": "No kernel code touched; ctest unchanged at 2677/2677."
      }
    ]
  },
  {
    "slug": "chapter-70-marching-a-curve-that-has-no-formula",
    "title": "Chapter 70 \u2014 marching a curve that has no formula",
    "date": "2026-08-02",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "The numerical SSI, its two independent oracles (the analytic circles and the Steinmetz identity), and the three defects found building it \u2014 a singular point that a gradient threshold cannot catch but tangent continuity c",
    "sha": "3f27c50",
    "content": [
      {
        "type": "p",
        "text": "The numerical SSI, its two independent oracles (the analytic circles and the Steinmetz identity), and the three defects found building it \u2014 a singular point that a gradient threshold cannot catch but tangent continuity can, a tangency emitting a 3-point \"curve\", and rejected branches not being remembered."
      }
    ]
  },
  {
    "slug": "trace-the-quartic-surface-intersections-the-analytic-table-c",
    "title": "Trace the quartic surface intersections the analytic table cannot express",
    "date": "2026-08-02",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "The diagnostic added last increment measured what the boolean's declines are made of: 35.2% of 3592 chained steps ended in UnexpressibleSeam, about five times the next-largest gap. Those are the pairs whose section is a ",
    "sha": "a6191fe",
    "content": [
      {
        "type": "p",
        "text": "The diagnostic added last increment measured what the boolean's declines are made of: 35.2% of 3592 chained steps ended in UnexpressibleSeam, about five times the next-largest gap. Those are the pairs whose section is a quartic space curve \u2014 a sphere met by an off-axis cylinder, two cylinders with crossing axes, a cone against anything curved and off its axis \u2014 and no amount of algebra on this surface vocabulary produces one. They have to be traced."
      },
      {
        "type": "p",
        "text": "traceSurfaceIntersection() Newton-projects lattice seeds onto BOTH surfaces, then marches along gradA x gradB, re-projecting each step and halving it where the chord's sag exceeds a budget tied to the region size. Output is a polyline per branch, which is what a quartic honestly is here. Sub-millisecond on every case tried; bitwise deterministic (fixed lattice order, no hashing)."
      },
      {
        "type": "p",
        "text": "Not wired into the imprint. This is the geometric core verified alone, the same way intersectSurfaces was before anything depended on it."
      },
      {
        "type": "p",
        "text": "VERIFIED AGAINST ORACLES THAT SHARE NO CODE WITH IT: - every Circle intersectSurfaces knows in closed form is reproduced to 1e-4 \u2014 plane/sphere, sphere/sphere, cone/coaxial-cylinder, and the TwoCircles case where finding only one ring would be a silent half-answer - the Steinmetz identity: two equal perpendicular cylinders meet in two PLANE ellipses in x=+z and x=-z, held to 1e-5"
      },
      {
        "type": "p",
        "text": "THREE DEFECTS FOUND AND FIXED WHILE BUILDING IT, each a variant of the same failure this arc keeps turning up \u2014 producing confident nonsense instead of declining:"
      },
      {
        "type": "p",
        "text": "1. SINGULAR POINTS. Those two Steinmetz ellipses CROSS at (0,+-1,0), where the curve genuinely has no tangent. The march wandered from one ellipse onto the other and back forever: 20000 points per branch, and ok=true. A threshold on |grad x grad| alone does not catch it \u2014 near the crossing Newton reprojects the chord midpoint onto the OTHER branch, sag explodes and the step collapses, so it disintegrated while still reporting success. TANGENT CONTINUITY does catch it: sag control keeps the per-step turn small, so a >60 degree jump is a different curve, not a bend. 160004 points -> 231, and the answer is now four arcs meeting at two singular points, which is also what an imprint wants (arcs are edges, singular points are vertices)."
      },
      {
        "type": "p",
        "text": "2. A TANGENCY IS A POINT, NOT A CURVE. Two tangent spheres yielded a 3-point \"branch\" and ok=true. Rejected on branch EXTENT, with the cut placed on a measured gap: artifacts span 1.9e-04 and 7.2e-04 of the box diagonal, the smallest legitimate curve (spheres overlapping by 0.01) spans 2.7e-02 \u2014 a factor of 37, so there is room either side. Tested from both directions."
      },
      {
        "type": "p",
        "text": "3. Rejected branches were not recorded for dedupe, so every lattice seed near a tangency re-traced the same debris: 886ms on one fixture, back to 2ms."
      },
      {
        "type": "p",
        "text": "Running out of budget now sets ok=false. A trace that exhausted itself produced a polyline that is not the curve, and saying otherwise is the exact failure mode this whole arc is about."
      },
      {
        "type": "p",
        "text": "2677/2677 via ctest."
      }
    ]
  },
  {
    "slug": "chapter-69-asking-the-empty-body-why",
    "title": "Chapter 69 \u2014 asking the empty body why",
    "date": "2026-08-02",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "The boolean was the one subsystem in the kernel without a diagnostic enum, so \"I cannot express this seam\" and \"there is nothing here\" were the same event. Splitting them decomposed the 48% empty rate and reordered the r",
    "sha": "b22faa7",
    "content": [
      {
        "type": "p",
        "text": "The boolean was the one subsystem in the kernel without a diagnostic enum, so \"I cannot express this seam\" and \"there is nothing here\" were the same event. Splitting them decomposed the 48% empty rate and reordered the roadmap: the missing curved SSI is ~5x the planar-arrangement gap."
      },
      {
        "type": "p",
        "text": "Also records a refinement that was measured and then removed \u2014 a straddle test worth 2 steps in 3592 that no fixture could distinguish from the AABB broad-phase."
      }
    ]
  },
  {
    "slug": "say-why-a-boolean-returned-nothing-and-the-answer-reorders-t",
    "title": "Say WHY a boolean returned nothing \u2014 and the answer reorders the roadmap",
    "date": "2026-08-02",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "C34 fixed three missing rows in the surface-intersection table. This fixes the reason those rows could go missing for the life of the file without anyone noticing, which is the more expensive defect.",
    "sha": "bb6408f",
    "content": [
      {
        "type": "p",
        "text": "C34 fixed three missing rows in the surface-intersection table. This fixes the reason those rows could go missing for the life of the file without anyone noticing, which is the more expensive defect."
      },
      {
        "type": "p",
        "text": "booleanToBody's watertight-or-empty invariant makes a failure and a genuinely empty result the same VALUE. They were also the same EVENT: intersectSurfaces answers Unsupported for a pair it cannot express, imprintOneWay handled Unsupported in the same switch arm as None (\"nothing to imprint\"), and the imprint returned true having done no work. Every other subsystem in this kernel already reports this kind of thing \u2014 animation and asset deserialization, mesh import/export, shader compilation all carry a diagnostic enum. The boolean was the one place that swallowed it."
      },
      {
        "type": "p",
        "text": "enum class BooleanDiagnostic { Ok, EmptyResult, UnexpressibleSeam, ImprintBudget, SewFailed };"
      },
      {
        "type": "p",
        "text": "booleanToBody takes an optional out-param; imprintMutually takes an optional `declinedSeam`. Both default, so no caller changes and \u2014 asserted, not assumed \u2014 the Body returned is bit-identical with and without."
      },
      {
        "type": "p",
        "text": "WHAT IT MEASURED, which is the point. Over 3592 chained steps the 48% empty rate this fuzzer reported last increment decomposes as:"
      },
      {
        "type": "p",
        "text": "Ok                 53.0% UnexpressibleSeam  35.2%   <- a missing capability SewFailed           6.9%   <- the planar-arrangement gap EmptyResult         4.9%   <- correct answers ImprintBudget       0.0%"
      },
      {
        "type": "p",
        "text": "The absent curved SSI is roughly FIVE TIMES the arrangement gap. Those two were recorded in the opposite order of importance, and the marching-SSI work is worth far more than the next attempt at disconnected-material faces."
      },
      {
        "type": "p",
        "text": "The attribution is checked, not asserted: the arrangement fixture (a bored plate cut by a bar) involves only planes and cylinders, both fully supported, and it reports SewFailed \u2014 a diagnostic that blamed the intersector there would inflate the very number being used to prioritise. Disjoint operands report EmptyResult, known quartics report UnexpressibleSeam, and Ok holds if and only if a solid came back (asserted over 240 configurations and at every chained fuzz step)."
      },
      {
        "type": "p",
        "text": "The fuzzer now tallies by reason with a CEILING on UnexpressibleSeam, so the gap can only shrink, and a guard that fires if the corpus stops producing quartics at all."
      },
      {
        "type": "p",
        "text": "REMOVED before landing: a stricter straddle test on the Unsupported arm (requiring the target face's boundary to fall on both sides of the tool surface). It reclassified 2 steps out of 3592, and two attempts to build a fixture that distinguished it from the AABB broad-phase alone both failed \u2014 the broad-phase is what makes the attribution sound. Fifteen lines no test can hold accountable are not worth 0.06%."
      },
      {
        "type": "p",
        "text": "2668/2668 via ctest."
      }
    ]
  },
  {
    "slug": "chapter-68-the-pair-that-was-never-in-the-table",
    "title": "Chapter 68 \u2014 the pair that was never in the table",
    "date": "2026-08-02",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "How a chained-boolean fuzz sweep's 36% empty rate on unions of provably overlapping solids led to the cone being absent from intersectSurfaces' pairwise dispatch, and to Unsupported sharing a switch arm with None so the ",
    "sha": "9258893",
    "content": [
      {
        "type": "p",
        "text": "How a chained-boolean fuzz sweep's 36% empty rate on unions of provably overlapping solids led to the cone being absent from intersectSurfaces' pairwise dispatch, and to Unsupported sharing a switch arm with None so the imprint could report success after doing nothing."
      },
      {
        "type": "p",
        "text": "Also corrects the closing essay, which listed \"a cone against anything curved\" among the permanently declined pairs \u2014 half of that is no longer true."
      }
    ]
  },
  {
    "slug": "the-cone-was-missing-from-the-surface-intersection-table-sil",
    "title": "The cone was missing from the surface-intersection table, silently",
    "date": "2026-08-02",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "A chained-boolean fuzz run put 48% of its steps at \"empty\". Splitting that by operand found unions of solids that provably overlap coming back with nothing, and narrowing by primitive kind put every one of them on a cone",
    "sha": "8c4a983",
    "content": [
      {
        "type": "p",
        "text": "A chained-boolean fuzz run put 48% of its steps at \"empty\". Splitting that by operand found unions of solids that provably overlap coming back with nothing, and narrowing by primitive kind put every one of them on a cone: cone \u222a coaxial rod, cone \u2212 coaxial rod, cone \u222a cone, all EMPTY at every offset tried."
      },
      {
        "type": "p",
        "text": "intersectSurfaces' dispatch handles plane\u2229{plane,sphere,cylinder,cone}, sphere\u2229sphere, cylinder\u2229cylinder and sphere\u2229cylinder, and fell through to Unsupported for cone\u2229cylinder, cone\u2229sphere and cone\u2229cone. imprintOneWay treats Unsupported exactly as it treats None \u2014 same switch arm, \"nothing to imprint\" \u2014 so the imprint did no work on genuinely interpenetrating solids, returned TRUE, and booleanToBody's watertight-or-empty invariant turned the un-imprinted result into a clean-looking empty body. Nothing anywhere reported a problem."
      },
      {
        "type": "p",
        "text": "The three pairs are added for the AXIALLY SYMMETRIC configurations, which is where the section is a real circle:"
      },
      {
        "type": "p",
        "text": "cone\u2229cylinder  coaxial, axis through the apex \u2192 the ring at t = radius/slope cone\u2229sphere    centre on the axis \u2192 (1+slope\u00b2)t\u00b2 \u2212 2dt + d\u00b2 \u2212 R\u00b2 = 0, roots behind the apex filtered out, so a sphere swallowing the apex gives ONE ring rather than a phantom pair cone\u2229cone      apexes on a shared axis \u2192 the station where the radii agree, handling opposed axes; equal slopes never meet; a shared apex with equal slope is the same surface, not a curve"
      },
      {
        "type": "p",
        "text": "Everything else stays Unsupported \u2014 a quartic space curve is not a Line or a Circle and claiming otherwise would put geometry into a body that does not lie on its own surface. What changed is that the cone is no longer declined on BOTH sides of that line."
      },
      {
        "type": "p",
        "text": "surfaceDistance gains its Cone case too (it answered 1e30, so the one helper whose job is verifying a seam lies on both surfaces could not verify a cone's)."
      },
      {
        "type": "p",
        "text": "Measured, coaxial rod against each primitive: unions of plain overlapping solids went 23.9% empty \u2192 0.0%. The volumes are checked against integrals worked out by hand rather than against the kernel: cone \u2212 rod and cone \u222a rod land within 5e-08 relative, cone \u2229 cone gives exactly \u03c0/12 overlap, cone \u2212 on-axis-sphere 0.142008 vs 0.142001."
      },
      {
        "type": "p",
        "text": "Two existing tests asserted the old behaviour as permanent and are corrected: both used a sphere centred on the cone's axis, which genuinely does cut the nappe. The remaining empties belong to the separate, already-recorded planar-arrangement gap on holed faces (89% \u2192 93%, untouched here)."
      },
      {
        "type": "p",
        "text": "The chained fuzz test that found this could not see the fix: it jittered every drill off-axis, so it never generated an aligned pair, and adding the three pairs moved its corpus by exactly zero steps. A quarter of its drills are now placed exactly on the axis, with a guard that fails if that stops happening."
      },
      {
        "type": "p",
        "text": "2661/2661 via ctest."
      }
    ]
  },
  {
    "slug": "chapter-67-a-boundary-predicted-in-advance",
    "title": "Chapter 67 \u2014 a boundary predicted in advance",
    "date": "2026-08-02",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "The remaining holed-solid decline, turned from a description into a cause. A correct generalization (a cut line may cross a boundary more than twice) moved the rate 75.1% -> 75.4% and was kept for a reason other than its",
    "sha": "9a3ed30",
    "content": [
      {
        "type": "p",
        "text": "The remaining holed-solid decline, turned from a description into a cause. A correct generalization (a cut line may cross a boundary more than twice) moved the rate 75.1% -> 75.4% and was kept for a reason other than its yield; the actual cause is visible from the geometry, in what the CENTRE cell's material looks like once the bore's disk is removed from it."
      },
      {
        "type": "p",
        "text": "The rule was written down before it was run and predicted all fourteen widths including both sharp transitions. What it names is architectural: the imprint's face-splitting model cannot produce a face whose material is disconnected, because every cut it knows is a chord and a chord splits connected into connected."
      }
    ]
  },
  {
    "slug": "a-cut-line-may-cross-a-boundary-more-than-twice",
    "title": "A cut line may cross a boundary more than twice",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "The Line imprint required EXACTLY two crossings, on the reasoning that a cut is one entry and one exit. That holds for a convex face and fails for everything else: a line crosses a boundary once for every time it enters ",
    "sha": "c23ca15",
    "content": [
      {
        "type": "p",
        "text": "The Line imprint required EXACTLY two crossings, on the reasoning that a cut is one entry and one exit. That holds for a convex face and fails for everything else: a line crosses a boundary once for every time it enters or leaves the material, and a face that has been cut before \u2014 or that had a hole merged into its outer ring by the previous commit \u2014 is routinely re-entered."
      },
      {
        "type": "p",
        "text": "MEASURED on a bored box cut by a bar whose cross-section crosses the bore circle, over 1248 cut attempts: 841 had the expected two crossings, and 113 had four, five or six. Every one of those declined, and a single refusal anywhere leaves the imprint incomplete and the whole Boolean empty."
      },
      {
        "type": "p",
        "text": "No new operator is needed. The crossings are ordered along the CURVE and the first ADJACENT PAIR that actually bounds material is cut; the driver re-offers the tool surface, so k segments are consumed in k passes. Which pair bounds material cannot be inferred from parity \u2014 a crossing landing exactly on a vertex is reported once where a transversal one is reported twice, which is where the odd counts come from \u2014 so it is TESTED: the candidate segment's midpoint must be on the face's material, inside the outer ring and inside none of its holes. With exactly two crossings that test passes and the behaviour is unchanged."
      },
      {
        "type": "p",
        "text": "BE HONEST ABOUT WHAT THIS BOUGHT: very little. Over the 972-operation sweep the watertight rate moves 75.1% -> 75.4%, three configurations. I expected more, and the measurement says the multi-crossing restriction was not what was holding the remaining band back."
      },
      {
        "type": "p",
        "text": "It is kept anyway, for a reason that is not the success count: the \"exactly two\" rule is a false statement about geometry sitting in the middle of the imprint, and leaving it there would send the next investigation the same wrong way it sent this one."
      },
      {
        "type": "p",
        "text": "WHAT IS ACTUALLY HOLDING THAT BAND, now measured precisely so the next attempt starts where this one finished. For a bar whose cross-section crosses the bore circle, the sew is offered defs=52 with dirReused=3 and oneSided=9, and every unpaired edge lies in the CORNER REGIONS between the square and the circle \u2014 at (0.4, 0.3), (0.3536, 0.3536), (0.3, 0.4) and their mirrors, which is where the two boundaries cross at eight points per cap. Those corner pieces are bounded by mixtures of straight segments and hole arcs, and their assembly comes out both non-manifold (a directed edge offered twice) and incomplete. That is a face-assembly problem in the corner pieces, not a crossing-count one."
      },
      {
        "type": "p",
        "text": "Suite 2648/2648, 41.4s, no regression and no measurable cost."
      }
    ]
  },
  {
    "slug": "chapter-66-the-hole-becomes-the-boundary",
    "title": "Chapter 66 \u2014 the hole becomes the boundary",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "The hole-crossing cut, the winding argument that makes the arc pairing fall out with no side test, and the blocker that mattered: the arc solver dismissed a line lying IN an arc's plane as \"parallel\", which is the ordina",
    "sha": "1b85425",
    "content": [
      {
        "type": "p",
        "text": "The hole-crossing cut, the winding argument that makes the arc pairing fall out with no side test, and the blocker that mattered: the arc solver dismissed a line lying IN an arc's plane as \"parallel\", which is the ordinary case for a hole in a planar face and the only one it would ever meet there."
      },
      {
        "type": "p",
        "text": "Records that fixing the crossing search alone produced a nonsensical result \u2014 one bar width working and its neighbours not \u2014 because that width's line passed exactly through two of the hole's 24 vertices."
      },
      {
        "type": "p",
        "text": "Also records switching the same class of oracle for the third time, and my own assertion about representation where the requirement was about geometry."
      }
    ]
  },
  {
    "slug": "a-cut-whose-line-runs-through-a-hole",
    "title": "A cut whose line runs through a hole",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "feat",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "Closes the gap the previous commit measured at half of all Boolean operations on a holed solid. \"Drill a hole, then cut across it\" works now, and the watertight rate over the 972-operation sweep goes 50.1% -> 75.1%, stil",
    "sha": "5c473d2",
    "content": [
      {
        "type": "p",
        "text": "Closes the gap the previous commit measured at half of all Boolean operations on a holed solid. \"Drill a hole, then cut across it\" works now, and the watertight rate over the 972-operation sweep goes 50.1% -> 75.1%, still with zero leaky results."
      },
      {
        "type": "p",
        "text": "`cutFaceBetween` splits a face between two OUTER-loop vertices, and it was the only cut the imprint had. When the cut's line runs through a hole that is the wrong topology: the hole has to be divided into two boundary arcs and merged into BOTH results' outer rings. New `cutFaceThroughHole` does that. Taking the four crossings in order along the curve \u2014 outer, hole, hole, outer, call them O1 H1 H2 O2 \u2014 and walking each ring in its own stored direction:"
      },
      {
        "type": "p",
        "text": "face A : outer O1->O2 , cut O2->H2 , hole H2->H1 , cut H1->O1 face B : outer O2->O1 , cut O1->H1 , hole H1->H2 , cut H2->O2"
      },
      {
        "type": "p",
        "text": "Both close, each cut edge gets exactly two coedges, and every pre-existing coedge is used once. THE ARC PAIRING NEEDS NO SIDE TEST: which hole arc goes with which outer arc is forced by the vertex sequence, because an inner loop is wound OPPOSITE to its outer ring \u2014 so traversing it forward from H2 covers exactly the side that outer O1->O2 bounds. Worked through on a square cap with a central circular hole cut along x = 0 before writing any of it."
      },
      {
        "type": "p",
        "text": "TWO THINGS HAD TO CHANGE TOGETHER, and the second was the real blocker."
      },
      {
        "type": "p",
        "text": "1. The crossing search only ever walked the OUTER loop, so it found no crossings on a hole and applied the cut as though the hole were absent. 2. Inside that search, the arc solver dismissed a line lying IN an arc's plane as \"parallel to the arc's plane\" and skipped it \u2014 and that is the ORDINARY case for a hole in a planar face, where the cut line and the hole's arcs are coplanar by construction. With (1) fixed and this not, the sweep only reached 58.8% and the bands were baffling: one bar width worked and its neighbours did not. It worked because its line happened to pass exactly through two of the hole's 24 vertices (cos t = 0.5 is a multiple of 15 degrees), which the vertex scan catches with no solver at all. Adding the coplanar quadratic \u2014 two roots, both taken, since one edge of a coarse hole can be crossed twice \u2014 took it to 75.1%."
      },
      {
        "type": "p",
        "text": "VERIFIED BY VOLUME, not by sewing successfully. A bar strictly inside the bore removes only empty space, so the analytic volume must be unchanged: it is 6.429204 for every width tried, exactly the bored box's. Its cut PLANES still run through the bore circle, which is precisely the configuration that used to fail, so it is the sharpest available test of the new path."
      },
      {
        "type": "p",
        "text": "TWO ORACLES CHANGED, both because a body now carries extra seam vertices so its arcs tessellate finer. `BRepMultiHoleFace.MixedOperationChainsStayValid` compared TESSELLATED volumes at 1e-6 and moved to 3.99981; the ANALYTIC delta is 4.000000954, and the tessellated total converges toward it (19.2482/19.2323/19.2310/19.2307 at subdivisions 0/2/4/6), so it now asserts the analytic identity with the tessellated one as a loose companion. And my own new test asserted the bore is still an inner LOOP \u2014 wrong, and wrong in the informative direction: after the cut the hole is merged into the outer boundary, which is the point of the operator. It now asks geometrically, that a point down the bore's axis still reads Outside."
      },
      {
        "type": "p",
        "text": "The floor in the contract test rises from total/3 to 2*total/3 to lock the gain in. Still declining and pinned: a bar whose cross-section CROSSES the bore circle (corners outside, edges inside), which should leave a rounded-cross hole."
      },
      {
        "type": "p",
        "text": "Both halves are load-bearing: disabling the cut operator fails 3 tests, disabling the coplanar solver fails 2."
      }
    ]
  },
  {
    "slug": "chapter-65-which-piece-keeps-the-hole",
    "title": "Chapter 65 \u2014 which piece keeps the hole",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "The bored-box chain, and the three hypotheses that were wrong before the right one: tangency (a coincidence in the fixture), holed faces as such (cutting one with a small block works), and the bore at all (a two-factor s",
    "sha": "6e1fab2",
    "content": [
      {
        "type": "p",
        "text": "The bored-box chain, and the three hypotheses that were wrong before the right one: tangency (a coincidence in the fixture), holed faces as such (cutting one with a small block works), and the bore at all (a two-factor sweep separated them cleanly). What ended it was instrumenting the SEW rather than the geometry \u2014 fromFaces succeeded, the body was merely not closed, and every one-sided edge sat on the bore's rim."
      },
      {
        "type": "p",
        "text": "The hole had been assigned by bookkeeping \u2014 whichever ring segment kept the old face id \u2014 instead of by geometry."
      }
    ]
  },
  {
    "slug": "splitting-a-face-gave-its-holes-to-the-wrong-piece",
    "title": "Splitting a face gave its holes to the wrong piece",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "\"Drill a hole, then cut across it\" returned an empty body. The cause is not in the Boolean and not in the bore \u2014 it is that `cutFaceBetween` divides a face's outer loop into two rings and never looked at its INNER loops,",
    "sha": "3044f28",
    "content": [
      {
        "type": "p",
        "text": "\"Drill a hole, then cut across it\" returned an empty body. The cause is not in the Boolean and not in the bore \u2014 it is that `cutFaceBetween` divides a face's outer loop into two rings and never looked at its INNER loops, so every hole stayed attached to whichever piece inherited the original face record. That is a choice about which segment of the ring kept the old id, which has nothing to do with where the hole actually is."
      },
      {
        "type": "p",
        "text": "MEASURED on box(2,2,2) bored by a radius-0.5 cylinder and then slotted across its top. The top cap split into the strip y in [0.6, 1.0] and the remainder y in [-1, 0.6], and the BORE'S HOLE \u2014 a circle of radius 0.5 about the origin, entirely inside the remainder \u2014 was left on the STRIP. The strip is inside the cut, so the Difference correctly dropped it, and it took the bore's rim with it: the rim's 24 segments were then offered by the cylinder faces alone, giving 24 one-sided edges and an open sew, which watertight-or-empty turned into a clean empty body."
      },
      {
        "type": "p",
        "text": "HOW IT WAS FOUND, because the first three hypotheses were all wrong. A sweep showed the failure tracked \"the cut reaches the top face\" and NOT \"the cut meets the bore\" \u2014 so it was not a tangency, though the original fixture's bar was exactly tangent to the bore and looked like one. It was not holed faces as such either: cutting a holed cap with a small block works fine. And a plain box takes the identical slot without trouble. What narrowed it was instrumenting the sew rather than guessing: fromFaces SUCCEEDED with integrity ok and the body merely not closed, and every one of the 22 one-sided edges sat at z = 1.0 on the bore's rim, which named the holed cap directly."
      },
      {
        "type": "p",
        "text": "A hole lies inside exactly one of the two pieces, so it is assigned by testing its centroid against each piece's ring \u2014 planar faces through pointInPlanarPolygon, curved ones through pointInSurfacePatchUV, matching what the rest of this file does."
      },
      {
        "type": "p",
        "text": "UNLESS the cut runs THROUGH the hole, which is not a re-assignment at all: it is a hole being divided into two boundary arcs and merged into the outer loops, which `cutFaceBetween` does not do. That is REFUSED rather than approximated, so the Boolean still returns cleanly empty there \u2014 the same outcome as before, now by decision \u2014 and it is pinned as the named remaining gap."
      },
      {
        "type": "p",
        "text": "MEASURED after: a slot across a bored box's top, clear of the bore, goes EMPTY -> 36 faces; a bar that SWALLOWS the bore goes EMPTY -> 24 and now agrees with cutting the plain box directly to 1e-6; a notch across a drilled plate sews with its hole intact and the exact expected volume. Bars inside the bore, and the exactly-tangent bar, still decline."
      },
      {
        "type": "p",
        "text": "Also removed a `// TEMPORARY DIAGNOSTIC` block that had been committed in booleanToBody \u2014 it called getenv on every Boolean and its own comment said it was not meant to ship. It was genuinely useful for this diagnosis, which is why it is being removed only now."
      },
      {
        "type": "p",
        "text": "5 new tests; 4 fail on revert, the fifth being the characterization that pins the still-declining case and so passes either way."
      }
    ]
  },
  {
    "slug": "chapter-64-passing-because-nothing-had-succeeded",
    "title": "Chapter 64 \u2014 passing because nothing had succeeded",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "The planar half of the tessellator, and the test it exposed: an app-layer assertion that the analytic chain survives was reading true because BOTH the analytic and the mesh path had failed, leaving the previous operation",
    "sha": "2931add",
    "content": [
      {
        "type": "p",
        "text": "The planar half of the tessellator, and the test it exposed: an app-layer assertion that the analytic chain survives was reading true because BOTH the analytic and the mesh path had failed, leaving the previous operation's body attached. Fixing the mesh path made the app correctly drop it, and the test failed for doing the right thing."
      },
      {
        "type": "p",
        "text": "Records the wrong turns too \u2014 a direct reproduction that looked innocent, a guessed segment count, a guessed tolerance \u2014 and the one line that settled it, which came from instrumenting what the app DECIDED rather than what I believed it must have decided."
      }
    ]
  },
  {
    "slug": "planar-faces-were-fanned-too-the-last-of-the-tessellator-s-l",
    "title": "Planar faces were fanned too \u2014 the last of the tessellator's litter",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "Completes the arc. A flat polygon is reproduced exactly by ANY triangulation of it, so the fan was never wrong about a planar face's volume or area \u2014 a box has always tessellated to exactly 8 and 24, before and after. It",
    "sha": "2c89cf1",
    "content": [
      {
        "type": "p",
        "text": "Completes the arc. A flat polygon is reproduced exactly by ANY triangulation of it, so the fan was never wrong about a planar face's volume or area \u2014 a box has always tessellated to exactly 8 and 24, before and after. It was wrong about the MESH, in the same two ways it was wrong on curved faces and for the same reason:"
      },
      {
        "type": "p",
        "text": "* ZERO-AREA TRIANGLES, where the ring's first vertex lies on a straight refined edge and the fan's leading and trailing triangles are three collinear points. * NON-MANIFOLD EDGES, where the fan emits the CHORD across a boundary edge it has already subdivided, so that edge is used four times."
      },
      {
        "type": "p",
        "text": "Neither shows in a volume, an area, or any topological invariant the kernel checks, which is how they survived. They matter anyway: classifyPoint casts its parity ray at this mesh, a zero-area triangle has no defined orientation, and a four-times-used edge is not a manifold boundary."
      },
      {
        "type": "p",
        "text": "MEASURED (degenerate / over-used, at subdivisions 8): box                              96 / 24  ->  0 / 0 drilled plate (holed planar)     64 /  8  ->  0 / 0 box u box (planar seams)        552 / 72  ->  0 / 0 box u cyl offset (arc bite)      80 /  8  ->  0 / 0 An open box keeps its one-sided edges, correctly \u2014 it is an open shell."
      },
      {
        "type": "p",
        "text": "The ring is triangulated in the face's own plane by the constrained Delaunay, every loop segment (outer AND holes) passed as a constraint. Projecting onto an orthonormal in-plane frame is an ISOMETRY, so this is the same 2D problem the geometry already is. Unlike the curved case there are NO interior points \u2014 a plane has no curvature to resolve \u2014 so the totals still telescope and the conservation numbers are byte-identical to before. Box volume and area stay exactly 8 and 24 at every level. Declines (a self-touching ring, a degenerate projection, a Delaunay that could not hold its constraints) fall through to the fan and ear-clipper untouched, which is what the pinch-splitting path relies on."
      },
      {
        "type": "p",
        "text": "\u26a0\ufe0f IT ALSO EXPOSED A TEST THAT WAS PASSING FOR THE WRONG REASON, and the diagnosis is worth more than the fix. `BooleanOfTwoBodiesStaysAnalyticAndChains` bored a cylinder through a box and then subtracted a bar. The analytic chain DECLINES on that pair \u2014 in this build and every build before it, verified by instrumenting both. The test passed because the MESH fallback also failed, so BooleanMode never reached its `body.reset()` and the node kept the body from the PREVIOUS operation: `has_value()` was true because nothing had succeeded. This change made the mesh path succeed, the app then correctly dropped the stale body \u2014 the very contract its sibling test asserts \u2014 and the test failed for finally doing the right thing."
      },
      {
        "type": "p",
        "text": "So that fixture is now a pair whose analytic chain genuinely works, with volumes asserted against closed-form arithmetic at both steps (a 1x1 bar through a 2x2x2 box removes 2, a crossbar removes 2 more less the 1x1x1 they share: 8 -> 6 -> 5, exact). The declining case is kept as its own characterization, `ChainingOffABoredBoxStillDeclinesAndDropsTheStaleBody`, so a real limitation is visible instead of hidden inside a green test, and it says to promote itself if the analytic chain ever learns the configuration."
      },
      {
        "type": "p",
        "text": "New tests: planar cleanliness across box / holed / seamed / arc-bitten fixtures, and planar exactness at every level. Both fail on revert."
      }
    ]
  },
  {
    "slug": "chapter-63-asked-the-same-question-five-thousand-times",
    "title": "Chapter 63 \u2014 asked the same question five thousand times",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "The cache, and the choice that mattered: a dirty flag can be wrong by omission, and Body has too many mutators for that to be a safe bet when the failure mode is a wrong inside/outside rather than a slow one. A key compu",
    "sha": "db78f2e",
    "content": [
      {
        "type": "p",
        "text": "The cache, and the choice that mattered: a dirty flag can be wrong by omission, and Body has too many mutators for that to be a safe bet when the failure mode is a wrong inside/outside rather than a slow one. A key computed from the data can only miss."
      },
      {
        "type": "p",
        "text": "Also records, for the third time in this stretch, a measurement that measured the previous build \u2014 the first per-suite timings after adding the cache showed no improvement because the test binary had not been relinked, and the conclusion drafted from them was the opposite of the truth."
      },
      {
        "type": "p",
        "text": "Closes out \u00a79 of the scope document, whose \"the number to watch is classifyPoint\" was the right thing to watch."
      }
    ]
  },
  {
    "slug": "cache-classifypoint-s-tessellation-keyed-on-the-body-itself",
    "title": "Cache classifyPoint's tessellation, keyed on the body itself",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "perf",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "`classifyPoint` answers by casting a parity ray at a tessellation of the shell, and it rebuilt that tessellation on EVERY query. `selectFace` loops over A's faces asking B to classify, then over B's faces asking A \u2014 so a",
    "sha": "c428d87",
    "content": [
      {
        "type": "p",
        "text": "`classifyPoint` answers by casting a parity ray at a tessellation of the shell, and it rebuilt that tessellation on EVERY query. `selectFace` loops over A's faces asking B to classify, then over B's faces asking A \u2014 so a single Boolean paid for O(F^2) tessellations of bodies that had not changed between one query and the next."
      },
      {
        "type": "p",
        "text": "MEASURED: a thirty-Boolean workload goes 2222ms -> 312ms, a 7.1x difference at a 98.3% hit rate (3447 hits, 60 misses). Whole kernel suite 105.1s -> 31.2s; ctest 120.4s -> 46.4s, which is below the 148.6s this tessellator arc started at and more than repays the sphere lattice's cost: KernelFuzz                  27.8s -> 4.5s   (pre-arc baseline 16.7s) BRepMassPropertiesOrientation 12.9s -> 1.5s (baseline 5.8s) BRepSphereOnCylinderAxis      6.8s -> 1.0s  (baseline 3.0s)"
      },
      {
        "type": "p",
        "text": "KEYED ON A FINGERPRINT OF THE BODY, NOT ON A DIRTY FLAG. Body has many mutation paths \u2014 vertexMut, faceMut, splitEdge, setEdgeArc, imprintCurve, transform, the Boolean's own rebuilds \u2014 and one missed bump would hand the classifier a mesh of the body's PREVIOUS shape. That is not a slow answer, it is a wrong inside/outside answer, and watertight-or-empty rests on that not happening. `tessellationKey` walks all seven vectors toMesh reads and includes fields whether or not toMesh reads them today: over-covering costs a needless rebuild, under-covering costs a wrong result."
      },
      {
        "type": "p",
        "text": "A Body COPY does not inherit the cache. The tessellation is derived data and Bodies are copied constantly, so the cache member's copy operations reset instead of copying \u2014 otherwise every `Body b = a;` would pay for a mesh it may never need."
      },
      {
        "type": "p",
        "text": "The 6 new tests are all one question asked several ways: after the body changes, is the answer the answer for the NEW body? Each mutation is checked against a reference body built the same way, whose cache is necessarily empty. Verified against both plausible ways to get this wrong \u2014 a constant key (every lookup hits) and a key covering only entity COUNTS, which is the under-hash someone would actually write \u2014 and each fails 3 of the 6."
      }
    ]
  },
  {
    "slug": "chapter-62-where-the-points-come-from",
    "title": "Chapter 62 \u2014 where the points come from",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "The sphere's fix, and the property it turned on: a tessellated conservation identity survives not because the tessellator is accurate but because a boundary-only triangulation's totals telescope. Interior points give tha",
    "sha": "1f547d4",
    "content": [
      {
        "type": "p",
        "text": "The sphere's fix, and the property it turned on: a tessellated conservation identity survives not because the tessellator is accurate but because a boundary-only triangulation's totals telescope. Interior points give that up, and boundary-derived ones make a fragment place them differently from the whole \u2014 so the samples were right and their provenance was wrong."
      },
      {
        "type": "p",
        "text": "Marks the scope document LANDED, and corrects its \u00a75, which had said to derive interior density \"from the boundary rather than from subdivisions directly\" \u2014 the one thing that must not happen."
      }
    ]
  },
  {
    "slug": "the-sphere-with-a-lattice-anchored-to-the-surface-not-the-fa",
    "title": "The sphere, with a lattice anchored to the surface not the face",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "Completes the tessellator arc. A sphere is curved both ways, so no connection of boundary-only points represents its interior \u2014 unlike a cylinder, where the ruling is flat and the strips are exact \u2014 and it genuinely need",
    "sha": "68b9a74",
    "content": [
      {
        "type": "p",
        "text": "Completes the tessellator arc. A sphere is curved both ways, so no connection of boundary-only points represents its interior \u2014 unlike a cylinder, where the ruling is flat and the strips are exact \u2014 and it genuinely needs interior samples. The previous commit declined to give it them, because the obvious way to had been built, measured and reverted."
      },
      {
        "type": "p",
        "text": "WHERE THE POINTS COME FROM IS THE WHOLE DESIGN. Drawn from each face's own boundary values, they fix the sphere and break something worth more: a tessellated identity like U+I == A+B holds only because a boundary-only triangulation's totals TELESCOPE across any decomposition, and a primitive band face and the Boolean fragment cut out of it then place their interior nodes in different places. Bounded \u2014 and it must be bounded, since classifyPoint tessellates on every query and unbounded the fuzz battery went 17s to over four minutes \u2014 the fragment refines slower than the whole, so the identity DRIFTS instead of converging: 4.2e-04 at subdivisions 2 rising to 4.1e-03 at 8."
      },
      {
        "type": "p",
        "text": "Anchored to the SURFACE, the candidates are integer multiples of a step derived from the parameter range and the subdivision count and nothing else. Every face covering a given piece of the sphere therefore offers the SAME interior points there, whichever decomposition it belongs to, so a whole and its fragments differ only where their boundaries differ and both converge. The step halves as subdivisions rise, and at subdivisions 0 there is no lattice at all, so every fixture calibrated against the unrefined tessellation is untouched."
      },
      {
        "type": "p",
        "text": "MEASURED, sphere(1,8,12) [exact 4.18879 / 12.56637]: volume  3.95870 plateau -> 4.18786, converging monotonically from below area   13.43916 (7% ABOVE) -> 12.56496, now inscribed as it must be degenerate / one-sided / over-used edges  0 / 0 / 368 -> 0 / 0 / 0 And the property the design exists for, on box(2) u sphere(1.2): the conservation gap now CLOSES with refinement, 3.3e-04 at subdivisions 1 down to 1.5e-05 at 8, where the boundary-derived lattice went the other way."
      },
      {
        "type": "p",
        "text": "LOAD-BEARING, and the two reverts say different things. Disabling the lattice fails only the conservation test \u2014 the grid alone already fixes the primitive sphere, so the lattice is precisely what fixes FRAGMENTS. Re-anchoring it to the face instead of the surface fails three: sphere convergence, sphere area, and conservation. The design claim is that anchoring is what matters, and that is the experiment."
      },
      {
        "type": "p",
        "text": "COST, stated plainly: ctest 64.6s -> 120.4s. Interior samples on a doubly-curved surface are not free and there is no version of this that is. It remains below the 148.6s this arc started from, while all three curved primitives now converge."
      },
      {
        "type": "p",
        "text": "Retired `ASphereStillUnderRefinesAndIsRecordedAsSuch`, whose message asked for exactly this (\"the surface-parameter lattice must have landed, so retire this characterization and assert convergence instead\"), and replaced it with convergence, an area bound, and the conservation-gap test."
      }
    ]
  },
  {
    "slug": "chapter-61-and-the-corrections-the-scope-document-earned",
    "title": "Chapter 61, and the corrections the scope document earned",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "The tessellator arc, written up: three symptoms that were one line of code (the face was triangulated in 3D when the thing being approximated lives in (u,v)), and the two approaches that were built, measured and discarde",
    "sha": "42fc843",
    "content": [
      {
        "type": "p",
        "text": "The tessellator arc, written up: three symptoms that were one line of code (the face was triangulated in 3D when the thing being approximated lives in (u,v)), and the two approaches that were built, measured and discarded."
      },
      {
        "type": "p",
        "text": "Also marks up docs/developer/tomesh-curved-tessellation.md with what survived contact and what did not. Its \u00a74 premise was false \u2014 Delaunay minimises edge LENGTH, and on a narrow tall cylinder patch that is the angular direction, the expensive one \u2014 so the path it proposed made the area worse than the fan it replaced. Its \u00a75 interior points are unsafe as specified, because deriving their density from each face's boundary makes a fragment place them differently from the whole and a tessellated conservation identity then drifts instead of converging. Its \u00a72, \u00a73, \u00a78 and \u00a710 held up exactly and are what made the work landable."
      }
    ]
  },
  {
    "slug": "tomesh-fanned-every-curved-face-and-so-never-refined-one",
    "title": "ToMesh fanned every curved face and so never refined one",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "4 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "`toMesh` placed subdivision points correctly \u2014 on each edge's own curve, so both incident faces share them \u2014 and then triangulated each face by FANNING its ring from the ring's first vertex. Exact on a flat face; on a cu",
    "sha": "14cafdf",
    "content": [
      {
        "type": "p",
        "text": "`toMesh` placed subdivision points correctly \u2014 on each edge's own curve, so both incident faces share them \u2014 and then triangulated each face by FANNING its ring from the ring's first vertex. Exact on a flat face; on a curved one it was the whole under-refinement defect, because a fan connects ring points that are far apart ON THE SURFACE and in 3D that chord cuts through the solid. Three symptoms, one cause:"
      },
      {
        "type": "p",
        "text": "1. VOLUME AND AREA STALLED. cylinder(1,2,16) converged to 6.1757 against an exact 2*pi = 6.28319 \u2014 converged, to the wrong number, because every level repeated the same mistake. A cross-section carried the resolution of the UNREFINED rim however high the count went. 2. ZERO-AREA TRIANGLES, AND WATERTIGHTNESS RESTED ON THEM. Where the ring's first vertex lay on a straight refined edge, the fan's trailing triangles were three collinear points \u2014 measured at subdivisions 2 as (0.924, 0.383, z) for z = -1, -0.333, 0.333. They had no defined winding AND were the only coverage of those boundary sub-segments, which is why dropping them opened 42 one-sided edges. This is the gate the scope doc said to clear before anything else, and it is cleared. 3. NON-MANIFOLD EDGES. The fan emitted the CHORD across a boundary edge it had already subdivided: edge (8,24) of that cylinder has length 2.000, the full generatrix, used FOUR times. A sphere had 368 such edges at subdivisions 16 and a tessellated area 7% ABOVE 4*pi*r^2, which for an inscribed surface can only be self-coverage."
      },
      {
        "type": "p",
        "text": "A curved face is now triangulated in the surface's own (u,v) domain. Two paths, both exact, both declining rather than approximating:"
      },
      {
        "type": "p",
        "text": "* GRID \u2014 the tensor product of the boundary's own parameter samples. Each cell is a planar quad on the chordal surface. A pole or apex collapses one axis rather than defeating it, which is the concentric cap a UV sphere wants and is what fixes the cone. * STRIPS \u2014 for a fragment whose opposite sides carry DIFFERENT samples, which an imprint routinely produces. Along the ruling nothing needs resolving, so the patch is cut into columns at the angular samples: exact, and O(ring) rather than a Delaunay."
      },
      {
        "type": "p",
        "text": "Anything they decline keeps the old fan, which is safe because `buildRing` derives a boundary without consulting how the face will be triangulated, so a new-path face and an old-path neighbour still meet exactly."
      },
      {
        "type": "p",
        "text": "MEASURED (exact volume in brackets): cylinder 6.17617 -> 6.28263 [6.28319]; cone 2.06427 -> 2.09421 [2.09440]; both now converge monotonically from below with ZERO degenerate, one-sided or over-used edges at every level, and a Boolean fragment tessellates identically to the primitive it was cut from."
      },
      {
        "type": "p",
        "text": "classifyPoint asks for THREE subdivisions, not six, and that is an increase in accuracy: on the old fan a cylinder's cross-section was stuck at an effective sagitta of 1.9e-02, where ruled subdivisions=3 gives 1.2e-03. It tessellates on every query, so this matters \u2014 ctest goes 148.6s -> 64.6s."
      },
      {
        "type": "p",
        "text": "TWO PATHS DELIBERATELY NOT TAKEN, both built and measured first. A constrained Delaunay over the ring alone made things WORSE (18.7834 area against the fan's 18.8893) because Delaunay minimises edge length and a cylinder patch is narrow and tall, so it picks the expensive direction. Interior Steiner points drawn from each face's own boundary fix the SPHERE (3.9587 -> 4.18757) and break something worth more: a tessellated identity like U+I == A+B holds because a boundary-only triangulation's totals telescope across any decomposition, and bounded interior points \u2014 bounded they must be, unbounded the fuzz battery went 17s -> 4min \u2014 leave a fragment refining slower than the whole, so the identity DRIFTS (4.2e-04 at subdivisions 2 to 4.1e-03 at 8) instead of converging."
      },
      {
        "type": "p",
        "text": "So THE SPHERE IS NOT FIXED, and it is pinned as such rather than left to be discovered. The designed fix is to draw the lattice from the SURFACE and the subdivision count instead of from each face's boundary, so any two decompositions sample the same positions."
      },
      {
        "type": "p",
        "text": "THREE CHARACTERIZATIONS RETIRED, each of which had asked to be. My own `TessellationDoesNotConvergeToTheExactCurvedVolume` from the previous commit; `BRepConeBaseArc.TheTessellatedConeConverges...`, whose message named the fan apex exactly; and BRepChainedBoolean's `vol()`, which chose the tessellated oracle over the analytic one because of a defect the previous commit fixed \u2014 the analytic volumes of those chains now agree to the digit where the tessellated ones differ by 3.3e-03, so the identity is asserted where it is exact. One knife-edge fixture moved: a point at exactly 11.25 degrees is a vertex of the 64-gon subdivisions=3 produces, so it is now 0.7071 of a facet, which lands on a vertex for no subdivision count."
      },
      {
        "type": "p",
        "text": "New test_BRepCurvedTessellation.cpp (7). Reverting both paths fails 7 tests, the grid alone 4, the strips alone 1."
      }
    ]
  },
  {
    "slug": "chapter-60-the-oracle-was-the-broken-one",
    "title": "Chapter 60 \u2014 the oracle was the broken one",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "The integrator residual chapter 55 left open, closed. Three causes, and the diagnosis recorded at the end of Part V was the smallest of them: the dominant one was a holed face sending the entire body to the tessellated p",
    "sha": "ef20ad6",
    "content": [
      {
        "type": "p",
        "text": "The integrator residual chapter 55 left open, closed. Three causes, and the diagnosis recorded at the end of Part V was the smallest of them: the dominant one was a holed face sending the entire body to the tessellated path, and before either of those, the metric itself was measuring the tessellator's error alongside the integrator's."
      },
      {
        "type": "p",
        "text": "Also records the methodological trap: a revert test that does not confirm its own build measured the previous binary and nearly retired a load-bearing fix \u2014 the same hazard the book already noted in a different form (a revert that fails to link)."
      },
      {
        "type": "p",
        "text": "Regenerated the HTML edition (60 chapters)."
      }
    ]
  },
  {
    "slug": "the-analytic-integrator-a-hole-a-fan-and-a-boundary-it-jumpe",
    "title": "The analytic integrator \u2014 a hole, a fan, and a boundary it jumped across",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "Closes the residual left open by \"curved patches integrated inside-out\". Three causes, and the one I had recorded as the diagnosis was the smallest of them.",
    "sha": "bb3486d",
    "content": [
      {
        "type": "p",
        "text": "Closes the residual left open by \"curved patches integrated inside-out\". Three causes, and the one I had recorded as the diagnosis was the smallest of them."
      },
      {
        "type": "p",
        "text": "FIRST, THE ORACLE WAS INVALID. The residual was measured as \"analytic volume disagrees with the body's own fine tessellation\". toMesh under-refines the interior of a curved patch and PLATEAUS rather than converging \u2014 a cylinder's tessellated volume stops at 6.1757 against an exact 2*pi = 6.28319 \u2014 so that metric mixed the integrator's error with the tessellator's and could never reach zero. Primitives showed 1.5-5.9% \"disagreement\" while their analytic volumes were exact to the digit. Replaced with two oracles that touch no tessellation: an imprint only adds seams so it must not change a volume, and U + I == A + B taken analytically."
      },
      {
        "type": "p",
        "text": "* A HOLE SENT THE WHOLE BODY TO TESSELLATION. integratePlanarFace bailed on any face with inner loops, and the caller's response to that bail is to discard every exactly-integrated face and re-integrate the body from toMesh(3). One bored cap moved an imprinted cylinder 1.75%, and this accounted for every identity violation involving a hole. Green's theorem needs no special case: the moments of a multiply-connected region are the same boundary integrals summed over every loop, and an inner loop is already stored wound opposite. The hole's edges are appended and assemblePlanarFace subtracts it by construction."
      },
      {
        "type": "p",
        "text": "* THE BOUNDARY WAS JUMPED ACROSS, NOT FOLLOWED. integrateFaceParametric maps the face's vertices into (u,v) and integrates the straight-edged polygon between them, which is the face's true image only when its edges are parameter-aligned. Every primitive edge is; a Boolean seam is not \u2014 a plane cutting a sphere leaves a circle that is neither latitude nor meridian. MEASURED, each edge's own curve midpoint against the straight (u,v) chord, normalised by the face's parameter extent: every primitive face 1e-16, every spherical face of a box/sphere Boolean 0.10-0.16. Circle edges are now sampled along the curve; a Line edge on a cylinder or cone is a generatrix and needs nothing, which keeps this a no-op wherever the old assumption held."
      },
      {
        "type": "p",
        "text": "* THE FAN NEEDED A SIGNED AREA. The parameter polygon is fanned from vertex 0, which tiles it only if it is CONVEX \u2014 and following the true boundary makes it non-convex, so with |area| the triangles outside the polygon were added instead of cancelled. Densifying ALONE therefore made things worse (identity violations 3 -> 15), which is how this surfaced. NOT the signed-area change chapter 55 tried and reverted: that one used the sign to carry the face's FACING and broke the arc-bite cases. The facing still comes from the ring's Newell normal. The sign here only decides which parameter triangles are inside the polygon."
      },
      {
        "type": "p",
        "text": "MEASURED, 35 Boolean pairs and 12 imprint configurations: analytic identity U+I == A+B violations   10 -> 0   (worst 1.79e-2 -> 0) imprints that change their body's volume   3 -> 0   (worst 1.75e-2 -> 0) Each change is load-bearing: reverting them fails 3, 1 and 2 tests."
      },
      {
        "type": "p",
        "text": "TWO TESTS CHANGED THEIR ORACLE, stated not suppressed. TheCentredUnionIsStillRight compared against the tessellation at 1% and began failing because the analytic answer became correct while the reference stayed wrong. It now asserts the closed form \u2014 six non-overlapping spherical caps on a box, 8.854513 \u2014 against which the analytic is 0.037% and the tessellation 1.78%, so the old oracle was 48x less accurate than the subject it judged. TheRemainingDisagreementIsBounded asked in its own comment to be retired when the disagreement reached zero; it is replaced by the two tessellation-free oracles above plus a separate characterization that pins the TESSELLATOR's bias so the two defects are never conflated again."
      },
      {
        "type": "p",
        "text": "Also added Body::curveCount(), which was missing from the accessor set."
      }
    ]
  },
  {
    "slug": "part-v-going-back-to-the-beginning-chapters-56-59",
    "title": "Part V \u2014 going back to the beginning (chapters 56-59)",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "The four foundational routines this pass repaired, written up in the book's voice, plus the observation that ties them together and belongs in the epilogue: a test that COUNTS its subject's output cannot fail for the rig",
    "sha": "4cdfad7",
    "content": [
      {
        "type": "p",
        "text": "The four foundational routines this pass repaired, written up in the book's voice, plus the observation that ties them together and belongs in the epilogue: a test that COUNTS its subject's output cannot fail for the right reason. At least eight vertices, at least six faces, one more control point, the endpoints did not move \u2014 each is true of the correct answer and equally true of nonsense, and all four routines sat behind assertions of that shape while being wrong from the day they were written."
      },
      {
        "type": "p",
        "text": "Also filled the gap in the Contents, which listed only through chapter 18 while the book had grown to 55."
      },
      {
        "type": "p",
        "text": "Regenerated the HTML edition (5 parts, 59 chapters)."
      }
    ]
  },
  {
    "slug": "the-3d-tetrahedralizer-under-filled-its-own-convex-hull",
    "title": "The 3D tetrahedralizer under-filled its own convex hull",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "A Delaunay tetrahedralization tiles the convex hull of its input exactly. TetDelaunay3D sized its super-tetrahedron at one fixed multiple of the bounding box (extent * 6) and never checked \u2014 the same defect the 2D triang",
    "sha": "195a309",
    "content": [
      {
        "type": "p",
        "text": "A Delaunay tetrahedralization tiles the convex hull of its input exactly. TetDelaunay3D sized its super-tetrahedron at one fixed multiple of the bounding box (extent * 6) and never checked \u2014 the same defect the 2D triangulators already document and solve in DelaunaySuperTriangle.h, where a sliver's circumcircle swallows the super-vertices, that triangle is never emitted, and stripping the super-triangle deletes real area."
      },
      {
        "type": "p",
        "text": "In 3D it is a sliver TET and its circumSPHERE, and it happens often: measured on 25 uniformly random points in a cube, the tetrahedra covered less than the hull in 50 of 60 point sets, by up to 1.8% of the volume. The empty-circumsphere property was never the problem \u2014 that held throughout, which is why the existing fixtures passed."
      },
      {
        "type": "p",
        "text": "Fixed the same way: build at a scale, verify the tetrahedra cover the hull volume, grow the scale if they do not. The schedule's first entry is the historical 6, so well-conditioned inputs cost exactly one build and are unchanged. Both volumes go through the orientation predicate, which differences coordinates first, so the two sides are computed the same accurate way. Over 400 point sets in five families (uniform, 1e-4 slab, integer grid, tight cluster with far points, on-sphere) coverage failures go 50/60 -> 0/400, worst gap 1.8e-2 -> 0."
      },
      {
        "type": "p",
        "text": "The file's own header comment claimed \"it turns out to be correct\". It was correct about the property the fixtures tested. Corrected in place rather than quietly dropped."
      },
      {
        "type": "p",
        "text": "The new randomized coverage test fails on the old code (0.53% missing on the first configuration)."
      }
    ]
  },
  {
    "slug": "nurbs-refinement-a-crash-a-no-op-and-a-rational-curve-that-m",
    "title": "NURBS refinement \u2014 a crash, a no-op, and a rational curve that moved",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "Knot refinement changes a curve's REPRESENTATION and must never change the curve. Nothing checked that: every assertion in the suite was a control-point COUNT plus endpoint positions, which a clamped knot vector preserve",
    "sha": "312e532",
    "content": [
      {
        "type": "p",
        "text": "Knot refinement changes a curve's REPRESENTATION and must never change the curve. Nothing checked that: every assertion in the suite was a control-point COUNT plus endpoint positions, which a clamped knot vector preserves no matter what the interior does. Three defects lived in public API underneath."
      },
      {
        "type": "p",
        "text": "* bezierDecomposition CRASHED. It held `const auto& knots = result.knots()` and reassigned `result` inside the loop, so every later read of knots[i] was a use-after-free \u2014 a segfault on an ordinary degree-2 curve with one interior knot. It also inserted at the MIDPOINT between adjacent knots rather than raising the multiplicity of the knots already there, so even without the crash it decomposed nothing. Now raises each distinct interior knot to multiplicity == degree, collecting the knot values up front because the vector is rebuilt by every insertion."
      },
      {
        "type": "p",
        "text": "* degreeElevate did not elevate. It inserted a knot at the domain midpoint, and knot insertion cannot change a degree, so degreeElevate(c, 3) on a degree-2 curve returned degree 2 plus spurious knots. Now the standard decompose / elevate / recompose, with the Bezier identity Q_i = (i/(p+1)) P_{i-1} + (1 - i/(p+1)) P_i, in homogeneous coordinates so rational curves survive. The elevated knot vector is exact but not minimal; restoring minimal multiplicity is knot REMOVAL, a separate algorithm, and the comment says so rather than implying otherwise."
      },
      {
        "type": "p",
        "text": "* insertKnot moved RATIONAL curves. Control points were blended in Cartesian coordinates and weights separately, but a rational curve is the projection of a polynomial curve in (w*x, w*y, w*z, w) and the affine combination has to happen there. MEASURED on the standard rational quarter circle: a knot at 0.5 pushed it 6.1e-02 off the unit circle; now 1.3e-07. A polynomial curve has all weights 1, so the non-rational path is arithmetically unchanged \u2014 and there was no rational test at all."
      },
      {
        "type": "p",
        "text": "Also clamped insertKnot's r to p - s: above that the j-loop reaches a zero-length buffer and reads element 0 of it."
      },
      {
        "type": "p",
        "text": "9 new tests assert the actual contract \u2014 the curve does not move, sampled across its interior, for polynomial and rational curves, over a sweep of degrees and knot layouts \u2014 plus the circle oracle no polynomial curve can provide. They fail on revert; the decomposition one takes the process down."
      }
    ]
  },
  {
    "slug": "a-sphere-parametrised-about-an-axis-its-grid-did-not-use",
    "title": "A sphere parametrised about an axis its grid did not use",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "analyticPatch evaluates a Sphere as p = r*(sin(u)*uAxis + cos(u)*cos(v)* vAxis + cos(u)*sin(v)*normal), so u is a latitude about uAxis and the parametrisation is singular at +/-uAxis. makeSphere built its rings about Z a",
    "sha": "4a6c846",
    "content": [
      {
        "type": "p",
        "text": "analyticPatch evaluates a Sphere as p = r*(sin(u)*uAxis + cos(u)*cos(v)* vAxis + cos(u)*sin(v)*normal), so u is a latitude about uAxis and the parametrisation is singular at +/-uAxis. makeSphere built its rings about Z and then declared uAxis = X, putting both singular points on the geometric EQUATOR \u2014 inside a band face rather than at a vertex."
      },
      {
        "type": "p",
        "text": "massProperties integrates a curved face over the straight-edged polygon its vertices map to in (u,v). With the frame misaligned that polygon is not the face's image: band edges are not parameter-aligned and a face containing a singularity folds over it, so per-face results were meaningless. Measured on r=1: lat=5 lon=4 reported 1.80 against 4.19, and lat=5 lon=3 reported exactly 0.00 \u2014 which fromIntegrals turns into a default MassProperties, a closed 15-face solid with ZERO MASS, as a rigid-body solver would receive it."
      },
      {
        "type": "p",
        "text": "WHY NOTHING CAUGHT IT: the sum over faces telescopes to the whole sphere whenever the wrong polygons happen to TILE the parameter domain, which even lat with even lon >= 4 does. Every assertion in the suite used even counts, so a body wrong face-by-face reported an exact total."
      },
      {
        "type": "p",
        "text": "With uAxis = Z the parameters ARE the grid: u is the ring latitude, v the longitude, each band face is an exact rectangle in (u,v), and each pole fan degenerates at a real vertex where the existing pole expansion handles it. All 27 lat/lon combinations tried are now exact, and the per-face value matches the closed form r^3*int(cos^3 u)*int(cos^2 v) = 0.462800 against a measured 0.462800306, where three of four band faces gave 0.6558 and the fourth -1.1458."
      },
      {
        "type": "p",
        "text": "Over a 261-body Boolean corpus: analytic-vs-tessellation disagreements 53 -> 35, worst 1.645 -> 0.238; U+I==A+B violations 17 -> 11, worst 7.4e-2 -> 3.2e-2. Improved, not finished \u2014 the remainder is Boolean fragments whose edges are not parameter-aligned either."
      },
      {
        "type": "p",
        "text": "CONTRACT CHANGE, stated not suppressed: OddLongitudeSphereFallsBackTo ConvergentTessellation asserted that odd longitudes are NOT exact. That was faithful to a sphere built wrong; it is now OddLongitudeSphereIsExactToo. The seam was never the problem \u2014 the loop unwrap has always handled a face straddling +/-pi."
      },
      {
        "type": "p",
        "text": "New test_BRepSphereParametrisation.cpp (5) pins the root cause as an invariant: a surface's parametrisation may only be singular where the face grid is, at a vertex. All 5, plus both updated tests, fail on revert."
      }
    ]
  },
  {
    "slug": "a-convex-hull-that-was-neither-closed-wound-nor-convex",
    "title": "A convex hull that was neither closed, wound, nor convex",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "The hull of the eight corners of a cube came back with 4 faces wound outward and 8 inward, 11 of its 25 directed edges without a reverse, and one face slicing diagonally through the cube's interior. Over 1500 random inpu",
    "sha": "1d48371",
    "content": [
      {
        "type": "p",
        "text": "The hull of the eight corners of a cube came back with 4 faces wound outward and 8 inward, 11 of its 25 directed edges without a reverse, and one face slicing diagonally through the cube's interior. Over 1500 random inputs in five families not one hull was closed, and in every family some input point lay outside the returned hull by more than the model's own size."
      },
      {
        "type": "p",
        "text": "Two structural defects:"
      },
      {
        "type": "p",
        "text": "* the horizon was collected as UNDIRECTED edges, sorted low-index-first, so a new face was wound by whichever endpoint index happened to be smaller rather than by the directed boundary edge it replaces; * orientation was then patched by flipping each new normal away from pts[seed[0]] \u2014 a point ON the hull. A growing hull has no reliable interior point, and against a boundary point the sign is arbitrary."
      },
      {
        "type": "p",
        "text": "Rebuilt as an incremental hull on the exact predicates the kernel already had: visibility is the sign of orient3D with no epsilon anywhere, the horizon keeps its direction so a new face inherits the winding of the face it replaces, exact duplicates are dropped, and the closed-surface invariant is verified before anything is returned."
      },
      {
        "type": "p",
        "text": "Every existing assertion was a COUNT \u2014 \"at least 8 vertices, at least 6 faces\" \u2014 which a hull that is none of the things a hull is passes. They now assert what a hull IS: closed, consistently wound outward, convex, and containing every input point, across ball / cube-cloud / thin-slab / extreme-aspect-ratio / integer-grid families, plus determinism, repeated points and non-finite input. 7 of the 13 fail against the old code."
      }
    ]
  },
  {
    "slug": "curved-patches-integrated-inside-out-read-orientation-from-t",
    "title": "Curved patches integrated inside-out \u2014 read orientation from the ring",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "The lead from C22 was a number that cannot be true: box(2,2,2) u sphere(1.2) offset 0.5 reporting an analytic volume of 1.08. It CONTAINS the box.",
    "sha": "5a21883",
    "content": [
      {
        "type": "p",
        "text": "The lead from C22 was a number that cannot be true: box(2,2,2) u sphere(1.2) offset 0.5 reporting an analytic volume of 1.08. It CONTAINS the box."
      },
      {
        "type": "p",
        "text": "All 112 of that union's spherical patches contributed a NEGATIVE volume term \u2014 not some, every one. The sphere's whole contribution subtracted instead of added, and 8 - 7.24 is exactly 1.08."
      },
      {
        "type": "p",
        "text": "The patch normal is du x dv, handed to the integrator flipped only by `face.reversed` \u2014 i.e. assuming du x dv points OUT of the solid whenever a face is not reversed. That holds for a primitive as built and is NOT a property the kernel maintains: a Boolean's fromFaces rebuilds the result's surface records and nothing there preserves which way the parametrisation runs. No primitive test could catch it \u2014 every face of a sphere, cylinder or cone as constructed agrees with the assumption, at any radius, any segment count, translated anywhere."
      },
      {
        "type": "p",
        "text": "FIRST ATTEMPT, WRONG, recorded so it is not repeated: make the parameter triangle's area SIGNED, on the reasoning that the (u,v) winding carries the facing. It halved the corpus failures and cut the worst error 17x \u2014 and broke three tests that had been exact for chapters (a box bored by a cylinder, where D + I = A held to 1e-5 and then missed by half a unit). On those faces the assumption DID hold and the winding was an artefact of ring traversal. Two plausible stories, each right about half the corpus."
      },
      {
        "type": "p",
        "text": "Both were guesses about where the orientation lives. The face already knows: its ring is wound CCW seen from outside, so its Newell normal points out. That is topology, not a convention anyone has to maintain. The direction is now read from the ring, compared once against du x dv at the parameter centroid, and flipped if they disagree \u2014 subsuming `reversed` entirely."
      },
      {
        "type": "p",
        "text": "Surface AREA has no orientation, so it takes the magnitude where volume takes the signed quantity; both now say so rather than sharing an unstated convention."
      },
      {
        "type": "p",
        "text": "Measured over 800 configurations (2443 bodies): bodies whose analytic volume disagrees with their own fine tessellation 251 -> 94   (worst 7.6e+02 -> 1.3e+01) analytic identity U+I == A+B    286/624 -> 84/624 (worst 9.8e-01 -> 2.8e-02) Primitives untouched and still exact at every segment count."
      },
      {
        "type": "p",
        "text": "NOT finished: 94 bodies still disagree. The new test bounds that on both sides so it can neither grow nor be silently fixed without the bound being retired."
      },
      {
        "type": "p",
        "text": "C22 flagged 9 chained Booleans whose volumes looked wrong and concluded the chains were right and the oracle was broken. That was the correct call, and this is the broken oracle."
      },
      {
        "type": "p",
        "text": "2598 ran / 2593 pass / 5 hardware skips."
      }
    ]
  },
  {
    "slug": "a-boolean-s-result-as-an-operand-coincident-curved-faces-rea",
    "title": "A Boolean's result as an operand \u2014 coincident CURVED faces read as Outside",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "The fuzz corpus had gone clean on every invariant it measures, which says as much about the generator as the kernel: 2000 configurations, each performing exactly ONE Boolean on two primitives, and two primitives never sh",
    "sha": "8cce7ba",
    "content": [
      {
        "type": "p",
        "text": "The fuzz corpus had gone clean on every invariant it measures, which says as much about the generator as the kernel: 2000 configurations, each performing exactly ONE Boolean on two primitives, and two primitives never share a surface."
      },
      {
        "type": "p",
        "text": "Chaining is the ordinary case and has oracles whose answers are known outright. B is contained in A u B, so (A u B) n B must be B and (A u B) u B must be A u B. Measured over 400 random pairs: (A u B) n B was EMPTY in 88 of 151 chains. Empty satisfies watertight-or-empty \u2014 which is precisely why nothing had noticed. That invariant is a safety property, not a correctness one."
      },
      {
        "type": "p",
        "text": "Every all-planar chain was right; every chain with a curved operand was wrong."
      },
      {
        "type": "p",
        "text": "TWO defects, both the same mistake: reading a curved surface as a plane."
      },
      {
        "type": "p",
        "text": "ONE. `Surface::normal` is a normal only for a PLANE; on a cylinder and a cone it is the AXIS. selectFace decides a coincident pair by probing just inside the face along -n, and on a cylinder that probe slid ALONG THE AXIS instead of into the material \u2014 a perpendicular direction, not a slightly wrong one. The tessellator carries a comment about this exact confusion; the Boolean had it in two places (selectFace's probe and emitFace's winding)."
      },
      {
        "type": "p",
        "text": "TWO. Fixing the direction did not help, because the probe asks classifyPoint, which answers from the TESSELLATION. A point on a curved surface is never on the chordal hull approximating it: on a 16-segment cylinder of radius 0.7 the hull reaches 0.6997 near the rims but dips to 0.6866 midway along a facet, so a probe 1e-3 inside the true surface is 1.3e-02 OUTSIDE the hull. Reliably wrong, not marginal."
      },
      {
        "type": "p",
        "text": "Both are now answered from the SURFACES. New Body::faceContainingPoint locates the face a point lies on analytically (on the surface, inside the boundary, holes excluded); the same-side question \u2014 which is about orientation \u2014 is settled by the dot product of the two faces' outward normals at the shared point. Neither depends on any tessellation."
      },
      {
        "type": "p",
        "text": "Curved containment needs both frames, and this cost a wrong turn worth recording: (u,v) is exact where the parametrisation behaves and singular at +/-uAxis, which makeSphere puts on X while the grid poles are on Z \u2014 so 92 of a sphere's 96 faces placed and 4 did not. The tangent plane has no singularity, fixed the sphere, and broke two cylinder chains because it folds on a patch spanning over a hemisphere. Accepting EITHER kept the cylinder failures, which proves the false answers were the tangent plane's. Each frame is used where it is sound."
      },
      {
        "type": "p",
        "text": "Measured over the same 400 pairs: (A u B) n B  correct  63 -> 117,  empty 88 -> 34 (A u B) u B  correct 123 -> 151,  empty 28 -> 0 (A \\ B) n B  empty throughout (unchanged, and must stay so) Single-operation corpus unchanged: 2107 sews, 0 invariant failures, 0 conservation violations."
      },
      {
        "type": "p",
        "text": "NOT a regression, though it first looked like one: 9 newly-succeeding chains report a wrong volume ONLY under massProperties, by a constant 1.754e-02 and only when a cylinder is involved. Their TESSELLATED volumes agree to the last digit. The chains are right and the analytic oracle is wrong \u2014 recorded as its own lead."
      },
      {
        "type": "p",
        "text": "2594 ran / 2589 pass / 5 hardware skips."
      }
    ]
  },
  {
    "slug": "a-cone-s-base-was-a-ring-of-chords-under-faces-claiming-an-e",
    "title": "A cone's base was a ring of chords under faces claiming an exact cone",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "The last watertight-or-empty violation in the fuzz corpus, and it was not a Boolean defect. Across 2000 configurations exactly two non-empty results failed validation; both came from one cone, and the imprinted CONE ALON",
    "sha": "25a9765",
    "content": [
      {
        "type": "p",
        "text": "The last watertight-or-empty violation in the fuzz corpus, and it was not a Boolean defect. Across 2000 configurations exactly two non-empty results failed validation; both came from one cone, and the imprinted CONE ALONE \u2014 before any operator ran \u2014 already failed checkGeometry, with eight side faces carrying vertices 0.019 to 0.025 off their own surface."
      },
      {
        "type": "p",
        "text": "A cylinder's two rims are 16 Circle edges. A cone's base was 16 Line edges."
      },
      {
        "type": "p",
        "text": "A cone's side face declares SurfaceKind::Cone, so its boundary must lie ON that cone. The circle where the cone meets its base plane does; the CHORD between two of its points does not \u2014 it dips inside everywhere except at its two endpoints. makeCylinder upgrades its rims to arcs after fromFaces for exactly this reason. makeCone never got that step."
      },
      {
        "type": "p",
        "text": "Nothing caught it because checkGeometry tests VERTICES, and a chord's two endpoints are on the cone. The edge between them is not, but no vertex lives there \u2014 until an imprint puts one there."
      },
      {
        "type": "p",
        "text": "The sharpest statement of the defect is not \"the base was chords\". The body asserted a smooth cone in two places and an inscribed pyramid in a third: the surfaces said cone, massProperties integrated one and returned pi*r^2*h/3 exactly at every segment count and always had, and only the base EDGES bounded something else. The one that disagreed was the one nobody had looked at."
      },
      {
        "type": "p",
        "text": "Measured across the 2000-configuration corpus: - non-empty results failing validation   2 -> 0  (the invariant now holds) - volume-conservation identity violations 1 -> 0  (the last one was this cone) - configurations that sew              2101 -> 2107"
      },
      {
        "type": "p",
        "text": "The sew count going UP is the notable part: a cone whose base agrees with its sides imprints cleanly where an inconsistent one bailed, so those six were not being declined for a good reason."
      },
      {
        "type": "p",
        "text": "CONTRACT CHANGE, stated not suppressed: BRepSurfaceArea asserted a cone's area is exact lateral + inscribed n-gon base, with a comment explaining that fromFaces derives Line edges. That described the body as built, and the body as built was wrong. A cone's area is now exact \u2014 lateral + a true disk, independent of segment count, as the cylinder's already was."
      },
      {
        "type": "p",
        "text": "NOT changed, and pinned so it is not mistaken for this: the TESSELLATED volume of a cone converges in the segment count and hardly at all in subdivision (90% of the true cone at n=8 sub0, 94% at sub6, 99.9% at n=64), because a conical face is fanned from a base point rather than the apex and its triangles chord across the base arc. That is the already-named under-refinement of curved patches. Before this change the n=8 sub0 figure was exactly the inscribed pyramid, because that is genuinely what a chord-based body encloses."
      },
      {
        "type": "p",
        "text": "2588 ran / 2583 pass / 5 hardware skips."
      }
    ]
  },
  {
    "slug": "a-face-drawn-twice-split-a-pinched-loop-before-triangulating",
    "title": "A face drawn twice \u2014 split a pinched loop before triangulating it",
    "date": "2026-08-01",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "A seam imprinted twice leaves a SLIT: the second cut retraces the first, and the loop walks out along a chain of edges and back along a second chain lying on top of it. The two sides are distinct vertices at the same pla",
    "sha": "861d047",
    "content": [
      {
        "type": "p",
        "text": "A seam imprinted twice leaves a SLIT: the second cut retraces the first, and the loop walks out along a chain of edges and back along a second chain lying on top of it. The two sides are distinct vertices at the same place \u2014 measured at 2.2e-16, 1.1e-16 and exactly 0.0 apart."
      },
      {
        "type": "p",
        "text": "Nothing in the B-rep objects. The body is closed, integral, checkGeometry clean, and the imprint is idempotent. What could not cope was the tessellation, because such a loop is not a simple polygon."
      },
      {
        "type": "p",
        "text": "The ear clipper skips a point coinciding with one of a candidate ear's own corners \u2014 it must, since the bridge it builds for holes walks in and out along the same cut \u2014 but it recognised those by INDEX. A slit's two sides have different indices, so each sat on a corner of every candidate ear and counted as blocking it. No ear was findable at all: it stalled with 18 of 39 vertices left and fanned the remnant, and that face's triangles came to 0.1728 where its boundary encloses 0.0812. classifyPoint casts its parity ray against this tessellation."
      },
      {
        "type": "p",
        "text": "Fixed where the loop is READ: split it at the pinch, which is the standard reading of a self-touching polygon \u2014 at a repeated position i < j, [i,j) and [j,i) are each closed loops, and recursing separates every slit. Zero-area pieces are dropped and the rest triangulated independently. On this fixture a ring of 39 becomes pieces of 18 and 9 with 12 points of slit between them, so BOTH carry material; an earlier cut of this kept only one piece, on a comment claiming a pinch never divides a face, and the instrumentation disproved it."
      },
      {
        "type": "p",
        "text": "Fixing it upstream was tried first and REJECTED ON MEASUREMENT, recorded so it is not tried again. Three rules were built and swept: refuse a cut whose span runs through any vertex of its own loop; refuse one that retraces an edge of that loop; shorten the cut to the first vertex it meets. The first two do remove the slit. All three cost the same 5 of 2000 configurations losing every one of their three Booleans \u2014 and NONE of those 5 had any duplicate vertices, so the guards were refusing legitimate cuts. Five working configurations for one malformed one is the wrong way round."
      },
      {
        "type": "p",
        "text": "Measured across the 2000-configuration corpus: faces whose triangles fail to cover their own boundary 402 -> 0, at no cost \u2014 2101 sews before and after, 3897 empties both, conservation identities unchanged at 1 violation of 1.3e-06."
      },
      {
        "type": "p",
        "text": "NOT fixed, and bounded on both sides rather than hidden: the imprinted box's total area is still 0.167 above the box's own at the finest subdivision, down from 0.213. That is two DIFFERENT faces over the same material \u2014 the duplicated seam itself \u2014 which the tessellator cannot fix because it is drawing faithfully what the B-rep holds. The test fails the day that is fixed upstream, so the bound gets retired rather than quietly kept."
      },
      {
        "type": "p",
        "text": "2582 ran / 2577 pass / 5 hardware skips."
      }
    ]
  },
  {
    "slug": "the-fan-apex-was-decided-by-the-last-bit-of-a-tied-coordinat",
    "title": "The fan apex was decided by the last bit of a tied coordinate",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "A curved patch is fanned from one apex, pinned to the lexicographically smallest position in its ring so the same patch cancels exactly between an intersection and a difference. The rule is right; it compared the FLOAT p",
    "sha": "fa8a23b",
    "content": [
      {
        "type": "p",
        "text": "A curved patch is fanned from one apex, pinned to the lexicographically smallest position in its ring so the same patch cancels exactly between an intersection and a difference. The rule is right; it compared the FLOAT positions with `==`."
      },
      {
        "type": "p",
        "text": "On a seam, coordinates being equal is the construction, not a coincidence: every point imprinted onto a planar face carries that face's plane coordinate exactly. So the comparison falls to a tie constantly, and the tie was settled by whatever sat in the last bit."
      },
      {
        "type": "p",
        "text": "Measured (fuzz seed 0xA17E51, iteration 102 \u2014 a sphere of radius 1.5103 quarter-turned about Y, against a box): a B-rep vertex and an arc midpoint agreed on x to fifteen significant figures. In the imprinted operand the midpoint was 2.8e-16 more negative and took the apex; in the union the two were bitwise equal, the comparison fell through to y, and the vertex took it. Two different fans over the same ring \u2014 and on a curved patch the diagonals span different surfaces. U + I came out 1.2e-02 short of A + B at subdivision 2 while agreeing to 2.4e-07 at subdivision 0, because subdivision is what puts those arc midpoints into the ring."
      },
      {
        "type": "p",
        "text": "The amplification is the point: those doubles differ by 2.8e-16, but they straddle a float rounding boundary, so narrowed they differ by 1.2e-07. The exact data was in the B-rep the whole time; only the copy the decision was read from had lost the difference between equal and nearly equal."
      },
      {
        "type": "p",
        "text": "The apex now compares the doubles on a grid of 1e-12 of the ring's own scale. Rounding to a grid rather than comparing within a tolerance keeps it a total order, so the minimum does not depend on where the ring starts \u2014 which is the property the fixed apex existed to provide."
      },
      {
        "type": "p",
        "text": "Over 2000 configurations of the fuzzer's generator the conservation violations went 14 -> 1 and the worst 8.8e-04 -> 1.3e-06. The fuzz gate had been written to tolerate exactly this (up to 4 at up to 2e-3, bounded both ways); that allowance is spent and it now reads zero."
      },
      {
        "type": "p",
        "text": "Also here, and deliberately smaller: the convexity test reads the doubles too, with a relative threshold. It moves NO volume and NO area \u2014 reverting it leaves every identity unchanged to the digit \u2014 but without it 13 of 1220 triangles still differ between operand and result. It buys triangle-level identity and nothing else, and the comment says so."
      },
      {
        "type": "p",
        "text": "Every validator passed throughout: watertight, integral, chi=2, and an exact verified partition of the operands' faces. Faces, edges and rings were identical point for point. Only the diagonals differed, and nothing in this kernel weighs anything."
      },
      {
        "type": "p",
        "text": "2578 ran / 2573 pass / 5 hardware skips."
      }
    ]
  },
  {
    "slug": "chapter-50-going-to-look",
    "title": "Chapter 50 \u2014 going to look",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "Three chapters ended with the same defect in different clothes: the point chosen to speak for a face was not on the face. Three is enough, so this chapter goes looking instead of waiting.",
    "sha": "3d60fd1",
    "content": [
      {
        "type": "p",
        "text": "Three chapters ended with the same defect in different clothes: the point chosen to speak for a face was not on the face. Three is enough, so this chapter goes looking instead of waiting."
      },
      {
        "type": "p",
        "text": "Only one place to look \u2014 faceSamplePoint is the sole such chooser feeding a decision \u2014 and one case in it never examined: a curved face with a hole, which returned the middle of the opening."
      },
      {
        "type": "p",
        "text": "The chapter's real subject is the reachability question. No boolean this kernel can perform produces such a face (254 bodies swept, zero found), but fromFaces is public and builds one immediately. A defect nobody can construct is a guard waiting to rot; one constructible through a public entry point is a defect. The measurement did not say whether to fix it \u2014 it said which of the two it was."
      }
    ]
  },
  {
    "slug": "the-last-place-a-sample-point-could-be-off-its-own-face",
    "title": "The last place a sample point could be off its own face",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "Three times running, the same shape of defect: the point chosen to speak for a face was a point the face does not contain. The centroid sat in the opening of a hole; the sample sat in the sliver between a seam's chordal ",
    "sha": "20ec249",
    "content": [
      {
        "type": "p",
        "text": "Three times running, the same shape of defect: the point chosen to speak for a face was a point the face does not contain. The centroid sat in the opening of a hole; the sample sat in the sliver between a seam's chordal polygon and its true circle; the curved sample sagged off its surface. Each fix was local. After the third, the sensible move was to check every remaining place such a point is chosen instead of waiting for a fourth configuration to expose one."
      },
      {
        "type": "p",
        "text": "There is exactly one chooser feeding decisions \u2014 faceSamplePoint, consumed by classifyFace and by the boolean's face selection \u2014 and exactly one case left untested in it: a CURVED face carrying a hole. The curved path returned the projected centroid with no hole test at all, so on a face whose middle is an opening it returned the middle of the opening."
      },
      {
        "type": "p",
        "text": "REACHABILITY, measured rather than assumed, because an unexercised guard is its own problem. Sweeping every configuration this kernel can imprint \u2014 254 bodies across box/sphere, box/cylinder, box/cone, cylinder pairs, sphere pairs and chained plates \u2014 yields ZERO curved faces carrying an inner loop: the interior-circle path is gated to planes, and every curved pair that could cut one is a quartic the intersector declines. So it is NOT reachable through a boolean."
      },
      {
        "type": "p",
        "text": "It IS reachable through `Body::fromFaces`, which is public. Built there \u2014 a cylindrical patch with a hole punched in the middle \u2014 the sample point was the exact centre of that hole. A demonstrated defect on a public path, which is the difference between fixing this and writing a guard for a case nobody can construct."
      },
      {
        "type": "p",
        "text": "Curved holed faces now get the same candidate-and-clearance search the planar ones do, with containment decided in the surface's (u,v) domain and every candidate projected onto the surface before being judged \u2014 so the winner is on the face in both senses. Where the parametrisation cannot answer, the projected centroid stands, which is no worse than before. Unholed curved faces and every planar face are untouched."
      },
      {
        "type": "p",
        "text": "test_BRepCurvedHoledFaceSample.cpp (4 tests), including a characterization that NO boolean produces such a face today \u2014 so a later reader knows why the guard exists and does not delete it as dead, and so the day that changes is noticed. Load-bearing by revert: the headline test fails with the sample at angle 0, z 0, the centre of the hole."
      },
      {
        "type": "p",
        "text": "Suite 2573 ran / 2568 pass / 5 hardware skips, zero regressions."
      }
    ]
  },
  {
    "slug": "chapter-49-bands",
    "title": "Chapter 49 \u2014 bands",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "A sphere on a cylinder's axis meets it in two rings; that half was algebra. The half worth recording is the sweep: radii 1.20-1.40 worked, 1.05-1.15 failed, 1.45-1.50 failed, 1.55 up worked. Alternating BANDS across a co",
    "sha": "5b615d3",
    "content": [
      {
        "type": "p",
        "text": "A sphere on a cylinder's axis meets it in two rings; that half was algebra. The half worth recording is the sweep: radii 1.20-1.40 worked, 1.05-1.15 failed, 1.45-1.50 failed, 1.55 up worked. Alternating BANDS across a continuous parameter \u2014 the shape of a defect triggered by a coincidence rather than a magnitude."
      },
      {
        "type": "p",
        "text": "The first classification check reported zero disagreements and was worthless: it compared the classifier against an oracle evaluated AT THE SAMPLE POINT, so an unrepresentative point makes both agree about something that does not matter. The right question is whether the point speaks for the face."
      },
      {
        "type": "p",
        "text": "It did not. All 120 sphere samples sat at 1.0735 on a sphere of radius 1.10 \u2014 a curved face was sampled at its outline's centroid, which sags inside the surface. Third appearance of the same shape of bug: the point chosen to speak for a face was not on the face."
      },
      {
        "type": "p",
        "text": "Also records two errors of my own found by measuring \u2014 a volume formula with the intersection inside out, and a float radius compared against a double literal."
      }
    ]
  },
  {
    "slug": "a-ball-on-a-rod-and-a-sample-point-never-on-its-own-face",
    "title": "A ball on a rod, and a sample point never on its own face",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "feat",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "TWO defects, the second exposed by the first and not about spheres at all.",
    "sha": "d8aff1e",
    "content": [
      {
        "type": "p",
        "text": "TWO defects, the second exposed by the first and not about spheres at all."
      },
      {
        "type": "p",
        "text": "PART ONE \u2014 the capability. A sphere whose centre lies ON a cylinder's axis makes the configuration a surface of revolution, so the meeting must be one too: RINGS. With rc the cylinder's radius and R the sphere's, a common point satisfies rc\u00b2 + z\u00b2 = R\u00b2, giving two rings at z = \u00b1sqrt(R\u00b2 \u2212 rc\u00b2), each of radius rc. They merge into one where the sphere is inscribed in the bore, and there is nothing when it is narrower. Off the axis the symmetry is gone, the meeting is a quartic, and it stays declined."
      },
      {
        "type": "p",
        "text": "That needed a new intersection kind: TwoCircles, the curved counterpart of the TwoLines a plane already cuts on a cylinder. Both branches are imprinted rather than the first that succeeds, since one face can be crossed by both rings of a sphere spanning the bore. The enum is switched on in exactly one place and that switch is exhaustive, so the compiler named it."
      },
      {
        "type": "p",
        "text": "PART TWO \u2014 which part one exposed. With the rings arriving, some radii sewed and others returned empty, in BANDS. That looked like a property of the radius and was not."
      },
      {
        "type": "p",
        "text": "A CURVED face was sampled at its outline's centroid, and the centroid of a ring of points on a curved surface does not lie on that surface: it sags inside by the chord-versus-arc difference. The one point deciding how a whole face is classified was a point the face does not contain \u2014 the same mistake the holed-planar case was fixed for, in different clothes."
      },
      {
        "type": "p",
        "text": "MEASURED on a sphere of radius 1.10 against a cylinder of radius 1: all 120 sphere face samples sat at |p| = 1.0735 instead of 1.10, and for the 24 narrow faces between the seam and the neighbouring grid latitude that sag moved the sample from radius 1.008 \u2014 outside the cylinder, where the face's material is \u2014 to 0.978, inside it. All 24 classified Inside, were dropped from the union, and left 72 boundary edges one-sided. At radius 1.30 the same sag flips nothing, which is exactly what disguised the cause."
      },
      {
        "type": "p",
        "text": "Curved sample points are now projected onto their own surface. Planar faces need no projection and get none, so every planar caller is unchanged."
      },
      {
        "type": "p",
        "text": "RESULT: ball-on-rod sews across six radii with both conservation identities at float precision, and the intersection is checked against the closed-form CYLINDRICAL CORE WITH SPHERICAL CAPS."
      },
      {
        "type": "p",
        "text": "TWO CONTRACTS UPDATED RATHER THAN SUPPRESSED. The baseline pinned sphere\u2229cylinder as out of scope; it is now partly in, so the test states where the boundary is \u2014 centre on the axis gives TwoCircles, centre off it is still declined. And BRepFaceSamplePoint asserted sample == centroid for curved faces too; what that pinned was the sample failing to be on its own face, so it now asserts the stronger property for those and keeps the bit-for-bit centroid guarantee for planar ones."
      },
      {
        "type": "p",
        "text": "TWO ERRORS IN MY OWN TESTS, found by measuring: the volume formula had the intersection as a sphere minus two caps (it is a cylindrical core plus two caps \u2014 8.13 measured against a predicted 12.88), and a radius was compared against a double literal where makeSphere stores a float, 2.4e-08 away."
      },
      {
        "type": "p",
        "text": "test_BRepSphereOnCylinderAxis.cpp (6 tests). Load-bearing by reverting each part separately: 4 and 2, different tests. Suite 2569 ran / 2564 pass / 5 hardware skips."
      }
    ]
  },
  {
    "slug": "chapter-48-the-cap-that-would-not-cut",
    "title": "Chapter 48 \u2014 the cap that would not cut",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "Parallel cylinders were never taught to the intersector; that half was routine. The half worth writing down is what it uncovered: with the rulings arriving, the caps STILL would not cut, refusing a seam circle that demon",
    "sha": "ad27c9d",
    "content": [
      {
        "type": "p",
        "text": "Parallel cylinders were never taught to the intersector; that half was routine. The half worth writing down is what it uncovered: with the rulings arriving, the caps STILL would not cut, refusing a seam circle that demonstrably crosses their boundary twice."
      },
      {
        "type": "p",
        "text": "A cap is planar but bounded by the cylinder's RIM \u2014 an arc \u2014 so the search took the arc path, which asks where a boundary arc crosses the imprint circle's plane. Correct for the case it was written for, a sphere's patch. Here the arc lies IN that plane and the formulation collapses."
      },
      {
        "type": "p",
        "text": "The habit: two coplanar circles do not meet by crossing each other's plane. It was not an error in the arithmetic; it was a correct answer to a question that stopped applying when the configuration changed underneath it. And the case is general \u2014 every planar face bounded by arcs rather than straight edges would have refused the same way."
      }
    ]
  },
  {
    "slug": "cylinders-side-by-side-and-the-cap-that-would-not-cut",
    "title": "Cylinders side by side, and the cap that would not cut",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "TWO defects, the second only reachable once the first was fixed.",
    "sha": "358aae5",
    "content": [
      {
        "type": "p",
        "text": "TWO defects, the second only reachable once the first was fixed."
      },
      {
        "type": "p",
        "text": "PART ONE \u2014 the capability. `intersectSurfaces` refused every cylinder/cylinder pair, so two cylinders standing side by side imprinted nothing and all three operators returned empty. When the axes are PARALLEL the answer is straight: the problem collapses to two circles in the plane perpendicular to the shared direction, and each solution point extrudes along it into a ruling. The distance between the axes decides everything \u2014 apart, externally tangent (one ruling), crossing (two), internally tangent, one bore inside the other, or the same surface twice. Skew and crossing axes are a quartic space curve and stay Unsupported rather than approximated."
      },
      {
        "type": "p",
        "text": "PART TWO \u2014 which that uncovered, and which is not about cylinders at all. With the rulings arriving, the side walls cut correctly and the CAPS still would not: they stayed two faces throughout, every operator still returned empty, and 24 boundary edges were left one-sided."
      },
      {
        "type": "p",
        "text": "A cap is a planar face whose boundary is the cylinder's RIM \u2014 a circular arc, not a straight edge \u2014 so the crossing search took the arc path, which asks where a boundary arc crosses the imprint circle's PLANE. That is the right question when the arc is out of that plane, which is the case it was written for (a sphere's lat-lon patch). Here the arc lies IN it, the formulation degenerates to R = 0, and it reports nothing at all."
      },
      {
        "type": "p",
        "text": "Two coplanar circles do not meet by crossing each other's plane. They meet by ordinary circle-circle intersection, solved in the plane they share. That is now handled, and it is not special to cylinders: it is the boundary of EVERY planar face bounded by arcs rather than straight edges \u2014 a cylinder's cap, a cone's base, a disk. The out-of-plane path is untouched."
      },
      {
        "type": "p",
        "text": "RESULT: parallel-cylinder booleans sew across six configurations \u2014 including coplanar caps, differing heights, axial offset and a small off-centre bore \u2014 all watertight, both validators clean, both conservation identities at float precision. The intersection is checked against the closed-form LENS PRISM (lens area times shared height) rather than against another part of the kernel."
      },
      {
        "type": "p",
        "text": "test_BRepParallelCylinders.cpp (5 tests): rulings verified to lie on BOTH surfaces (a Line of the right kind in the wrong place would pass a type check), every degenerate distance case named, the cap cut asserted on its own since it is invisible in a boolean's face count, and non-meeting cylinders asserted to invent no seam. Load-bearing by revert of each part separately: 3 of 5 each, failing different headline tests."
      },
      {
        "type": "p",
        "text": "Suite 2563 ran / 2558 pass / 5 hardware skips, zero regressions."
      }
    ]
  },
  {
    "slug": "chapter-47-a-primitive-you-could-not-model-with",
    "title": "Chapter 47 \u2014 a primitive you could not model with",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "A box against a cone imprinted nothing: six faces stayed six, seventeen stayed seventeen, all three operators empty. Not degraded \u2014 untouched. intersectSurfaces knew four pairs and none involved a cone.",
    "sha": "cfc3fb5",
    "content": [
      {
        "type": "p",
        "text": "A box against a cone imprinted nothing: six faces stayed six, seventeen stayed seventeen, all three operators empty. Not degraded \u2014 untouched. intersectSurfaces knew four pairs and none involved a cone."
      },
      {
        "type": "p",
        "text": "The chapter's point about the geometry: a cylinder's sections all share one radius, a cone's is slope*v \u2014 a function of where the plane falls. That is the whole difference between the surfaces, and it is what the test asserts, because a constant radius would still be a valid Circle and wrong."
      },
      {
        "type": "p",
        "text": "Records that the scope boundary is tested as deliberately as the capability \u2014 an oblique plane cuts a conic that is neither Line nor Circle, so it declines, and an untested decline is the kind that quietly stops declining."
      },
      {
        "type": "p",
        "text": "Also records the intermittent Vulkan segfault honestly: pre-existing, about one full run in four, clean in isolation, clean under valgrind, and present two chapters before any cone code. A suite that is green on the second attempt is not green."
      }
    ]
  },
  {
    "slug": "a-cone-can-be-combined-with-something",
    "title": "A cone can be combined with something",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "`intersectSurfaces` handled plane/plane, plane/sphere, plane/cylinder and sphere/sphere. Every pair involving a cone returned Unsupported, so no seam was ever offered and no face was ever cut: a box against a cone imprin",
    "sha": "b1350ab",
    "content": [
      {
        "type": "p",
        "text": "`intersectSurfaces` handled plane/plane, plane/sphere, plane/cylinder and sphere/sphere. Every pair involving a cone returned Unsupported, so no seam was ever offered and no face was ever cut: a box against a cone imprinted NOTHING \u2014 six faces stayed six, seventeen stayed seventeen \u2014 and all three operators returned empty. A cone is one of the primitives the editor places, so this was a whole primitive that could not be modelled with."
      },
      {
        "type": "p",
        "text": "Two families of plane section are curves this kernel can represent:"
      },
      {
        "type": "p",
        "text": "* a plane PERPENDICULAR to the axis cuts a CIRCLE. Unlike a cylinder's sections, which all share one radius, a cone's ring at axial distance v from the apex has radius slope*v \u2014 the radius is a function of where the plane falls, not a constant, which is the whole difference between the two surfaces and is asserted as such. * a plane containing BOTH the apex and the axis cuts the two rulings that lie in it."
      },
      {
        "type": "p",
        "text": "The apex is reported as a Point rather than a zero-radius Circle, and a plane behind it meets nothing \u2014 the cone is single-napped."
      },
      {
        "type": "p",
        "text": "SCOPE, asserted as deliberately as the capability: an oblique plane cuts an ellipse, parabola or hyperbola, none of which is a Line or a Circle, so it stays Unsupported rather than approximated. In particular a box face PARALLEL to the axis but missing the apex cuts a hyperbola, so a cone wider than the box around it is still out of scope. Cone against sphere and cone against cone remain out of scope too."
      },
      {
        "type": "p",
        "text": "The imprint side needed the cone in three more places to accept its own rings: `circleLiesOnSurface` (radius slope*v, nothing behind the apex), `surfaceUV` (v axial, u angular as on a cylinder), and `periodicParam`."
      },
      {
        "type": "p",
        "text": "RESULT: box against cone sews for all three operators at four radius/offset combinations, watertight with both validators clean and both conservation identities at float precision. The intersection is checked to be a FRUSTUM OF THE RIGHT SIZE \u2014 bounded below by the faceted solid the kernel stores and above by the smooth cone it approximates \u2014 because a topological check would accept any closed shape."
      },
      {
        "type": "p",
        "text": "test_BRepConeSection.cpp (7 tests). Load-bearing by revert: 5 of 7, the survivors being the two that assert what stays Unsupported."
      },
      {
        "type": "p",
        "text": "Suite 2558 ran / 2553 pass / 5 hardware skips, zero regressions. The cone path was additionally run under valgrind over ~300 cone booleans: zero errors."
      }
    ]
  },
  {
    "slug": "chapter-46-a-rare-follow-up",
    "title": "Chapter 46 \u2014 a rare follow-up",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "A plate drilled four times died at the second hole, with everything upstream clean: imprint fine, both operands valid, no duplicates, and zero classification disagreements on the plate's own faces. The three missing face",
    "sha": "a2309c3",
    "content": [
      {
        "type": "p",
        "text": "A plate drilled four times died at the second hole, with everything upstream clean: imprint fine, both operands valid, no duplicates, and zero classification disagreements on the plate's own faces. The three missing faces belonged to the DRILL, and they read as outside the plate they sit inside."
      },
      {
        "type": "p",
        "text": "The cause: toMesh kept one inner ring per face and broke. After the first bore the plate's faces carry one hole; the second gives them two, and the second never reached the triangles that classifyPoint casts its ray against. The comment beside the code called multiple holes \"a rare follow-up\" \u2014 it had been sitting there since the hole path was written, and it was wrong the first time anybody drilled two holes in a plate."
      },
      {
        "type": "p",
        "text": "The habit worth keeping: of any structure kept in two forms, ask which form the decisions are actually read from. Every representation here knew about the second hole except the one that mattered."
      }
    ]
  },
  {
    "slug": "a-face-may-have-more-than-one-hole",
    "title": "A face may have more than one hole",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "`toMesh` collected inner rings with a loop that assigned one and broke. The source said so plainly \u2014 \"multiple holes on one face are a rare follow-up\" \u2014 and that is the opposite of true: a plate drilled twice has two hol",
    "sha": "f5d8510",
    "content": [
      {
        "type": "p",
        "text": "`toMesh` collected inner rings with a loop that assigned one and broke. The source said so plainly \u2014 \"multiple holes on one face are a rare follow-up\" \u2014 and that is the opposite of true: a plate drilled twice has two holes in one face, which is most real parts."
      },
      {
        "type": "p",
        "text": "The consequence is not cosmetic, because classifyPoint is a parity ray cast against these triangles. A hole that never reaches the tessellation is not a hole as far as classification is concerned: the face is drawn solid across it, the ray crosses material that is not there, and points behind it come back on the wrong side."
      },
      {
        "type": "p",
        "text": "MEASURED on the canonical chain \u2014 a 4x4x1 plate drilled four times in sequence. Hole one was fine. On hole two, three of the drill's own fifty faces, sampled at mid-plate and plainly inside the plate, classified OUTSIDE it; they were dropped from the difference, eight boundary edges were left with one face instead of two, and the sew refused. Nothing to do with the bores interacting \u2014 they are 2.4 apart with radius 0.4. The chain simply died at the second hole."
      },
      {
        "type": "p",
        "text": "Holes are now bridged into the outer ring one at a time, right to left, each by a two-way cut from its rightmost vertex to the first polygon edge a +X ray meets. The ray is cast against the polygon built SO FAR rather than against the outer ring, so a hole bridging leftward may land on a hole already merged \u2014 which is correct, and is why the order matters. A hole with no edge to its right is left out rather than spliced across the boundary: wrong but bounded, where a blind splice corrupts the whole polygon."
      },
      {
        "type": "p",
        "text": "RESULT: the chain runs. Four holes then two unions, every step watertight with both validators clean. The numbers are exact rather than approximate \u2014 each of the four identical bores removes 0.493630, and each 1x1x3 boss adds exactly 2.000000."
      },
      {
        "type": "p",
        "text": "This is what a feature history is made of, and it is what the editor now does, so the tests assert the CHAIN rather than a single operation: identical bores must remove identical volume (anything else means a hole was lost or double-counted), the face is checked to actually carry three holes, and every bore's axis is asserted to classify Outside \u2014 which is the property that was really broken."
      },
      {
        "type": "p",
        "text": "test_BRepMultiHoleFace.cpp (5 tests). Load-bearing by revert: 4 of 5 fail, the survivor being the single-hole guard that must pass either way."
      },
      {
        "type": "p",
        "text": "Suite 2551 ran / 2546 pass / 5 hardware skips, zero regressions."
      }
    ]
  },
  {
    "slug": "chapter-45-one-cause-wearing-two-faces",
    "title": "Chapter 45 \u2014 one cause wearing two faces",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "Duplicate vertices and a complement arc turned out to be one defect: the complement runs past its neighbours' ring vertices, and the reconcile pass then splits it at each of them.",
    "sha": "043fcb5",
    "content": [
      {
        "type": "p",
        "text": "Duplicate vertices and a complement arc turned out to be one defect: the complement runs past its neighbours' ring vertices, and the reconcile pass then splits it at each of them."
      },
      {
        "type": "p",
        "text": "The cause was a containment test that was not uncertain but WRONG \u2014 a sphere's (u,v) parametrisation is singular at its poles and this seam sat at 61 degrees of latitude. A tie-break cannot help there, because a tie-break only runs when the test admits it does not know. What rescues it is a second test that cannot fail the same way: the face's bounding box, which is a NECESSARY condition and never touches the parametrisation, promoted from tie-breaker to veto."
      },
      {
        "type": "p",
        "text": "Also records a fix that was written, worked, and was removed \u2014 the duplicate guard, which re-measuring showed was doing no work once the veto landed. Shipping it would have implied it was holding something up."
      }
    ]
  },
  {
    "slug": "the-face-s-bounding-box-vetoes-a-wrong-containment-verdict",
    "title": "The face's bounding box vetoes a wrong containment verdict",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "Box against sphere at offset 0.3 with radius 0.8 \u2014 the last configuration failing for any reason other than tangency \u2014 was wrong in two visible ways. Six vertices on the sphere were duplicated, coincident with existing o",
    "sha": "2b24f63",
    "content": [
      {
        "type": "p",
        "text": "Box against sphere at offset 0.3 with radius 0.8 \u2014 the last configuration failing for any reason other than tangency \u2014 was wrong in two visible ways. Six vertices on the sphere were duplicated, coincident with existing ones to within 3e-16, so the sew welded each pair, every seam edge acquired a third user and fromFaces refused. And one seam arc traced the COMPLEMENT: the long way round the circle, 5.3716 rad against a true 0.9116."
      },
      {
        "type": "p",
        "text": "They are one defect. A complement arc swallows the ring vertices belonging to its neighbours, so the pass that reconciles the two operands' discretizations splits it at each of them \u2014 and that is where the duplicates came from."
      },
      {
        "type": "p",
        "text": "THE CAUSE. The arc selector already tested both candidates and broke ties on the face's bounding box. Not enough here, because the containment test was not tied \u2014 it was confidently WRONG. Containment on a curved face is decided in the surface's (u,v) domain and a sphere's parametrisation is singular at \u00b1uAxis; this seam sits at 61\u00b0 of latitude, near enough for the test to invert. Of eight seam arcs, seven were decided correctly and one \u2014 on the face MIRRORING one decided correctly, with identical spans \u2014 chose the complement."
      },
      {
        "type": "p",
        "text": "The box is now a VETO as well as a tie-break, and that part is logic rather than a heuristic: an arc lying inside the face cannot leave the box bounding that face's boundary, so a containment verdict the box contradicts cannot be right. Vetoing it turns a confidently wrong answer into an undecided one, which the existing tie-break then resolves. Measured across the eight arcs: the box and the (u,v) test agree on seven, and the box is right on the eighth."
      },
      {
        "type": "p",
        "text": "WHAT WAS REMOVED AGAIN. A guard against splitting where a vertex already exists was written first, and it worked. After the veto landed, re-measuring showed the duplicates were gone WITHOUT it across all fourteen configurations \u2014 it was doing no work \u2014 so it is not in this commit. Verified by reverting it alone: identical results, zero duplicates everywhere. Shipping it would have implied it was holding something up."
      },
      {
        "type": "p",
        "text": "RESULT: every box/sphere configuration that is not an exact tangency now sews, for all three operators, with both conservation identities at float precision. The remaining empties are exact tangencies, where the true result is not a manifold solid and a clean empty body is the contract."
      },
      {
        "type": "p",
        "text": "test_BRepSeamReconcileAndPole.cpp (5 tests). The duplicate-vertex assertion stays even though the veto is what satisfies it \u2014 it is a real invariant and it is how this was found \u2014 but nothing in the source claims to enforce it directly. The sweep asserts every non-tangent configuration rather than a named list, so one that stops working is caught even if nobody thought of it. Load-bearing by revert: 3 of 5."
      },
      {
        "type": "p",
        "text": "Suite 2546 ran / 2541 pass / 5 hardware skips, zero regressions."
      }
    ]
  },
  {
    "slug": "the-editor-can-reach-the-analytic-b-rep",
    "title": "The editor can reach the analytic B-rep",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "app"
    ],
    "category": "Commit",
    "excerpt": "The app layer had no reference to `brep` anywhere in it. Primitives were placed as triangles and BooleanMode cut those triangles against each other, so every analytic surface intersection, seam imprint and face classific",
    "sha": "459f869",
    "content": [
      {
        "type": "p",
        "text": "The app layer had no reference to `brep` anywhere in it. Primitives were placed as triangles and BooleanMode cut those triangles against each other, so every analytic surface intersection, seam imprint and face classification in the kernel was unreachable from the UI \u2014 improving them could not change anything a user saw."
      },
      {
        "type": "p",
        "text": "A feature now carries its analytic solid alongside its mesh. The mesh is what gets drawn and picked; the body is what the feature IS. Placing a box, sphere, cylinder or cone builds both, at dimensions that match exactly \u2014 a body describing different geometry than the triangles on screen would move the model the moment an operation used it. A torus and a plane have no analytic primitive, so they get no body and stay on the mesh path."
      },
      {
        "type": "p",
        "text": "When BOTH operands of a boolean have a body, the operation runs on the real surfaces and the result is itself a solid, so it feeds the NEXT operation unchanged. That is the property the whole B-rep path exists for: a chain stays exact instead of degrading a little at each step."
      },
      {
        "type": "p",
        "text": "TWO THINGS THAT MATTER MORE THAN THE HAPPY PATH:"
      },
      {
        "type": "p",
        "text": "The analytic path DECLINES rather than fails. booleanToBody holds itself to watertight-or-empty and returns a clean empty body for what it cannot sew \u2014 tangencies above all, where the true result is not a manifold solid at all. That is not an error to report; the mesh path still gives the user their operation."
      },
      {
        "type": "p",
        "text": "And a fallback CLEARS the stale body. The body described the solid before the operation and the mesh path cannot update it. Left attached, the next analytic operation would consume geometry that is no longer on screen and the model would silently diverge from the picture of it. That one is asserted on its own."
      },
      {
        "type": "p",
        "text": "test_AppAnalyticBooleanWiring.cpp (5 tests): a placed primitive's body and mesh enclose the same volume; a box drilled by a cylinder comes out watertight with the volume the geometry dictates (8 - pi*r^2*h) and CHAINS into a second analytic operation; an operand without a body still operates; the fallback clears; and mesh-only features are untouched."
      },
      {
        "type": "p",
        "text": "Additive throughout \u2014 FeatureNode gains an optional member, no header is added, and every pre-existing mesh workflow behaves as before."
      },
      {
        "type": "p",
        "text": "Suite 2541 ran / 2536 pass / 5 hardware skips, zero regressions."
      }
    ]
  },
  {
    "slug": "chapter-44-a-sliver-seven-thousandths-wide",
    "title": "Chapter 44 \u2014 a sliver seven thousandths wide",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "Two gaps: one that turned out not to be a gap, and one hiding where no tolerance could reach.",
    "sha": "3ad16cb",
    "content": [
      {
        "type": "p",
        "text": "Two gaps: one that turned out not to be a gap, and one hiding where no tolerance could reach."
      },
      {
        "type": "p",
        "text": "The first \u2014 \"the offset cylinder's difference alone fails\" \u2014 was an artifact of a fixture whose cylinder is exactly tangent to the box walls. A survey of radius against offset shows all 21 generic configurations sew for all three operators and every failure is an exact tangency, whose true result is non-manifold. Written down twice as a property of the operator; the survey that corrects it was four lines."
      },
      {
        "type": "p",
        "text": "The second was a sample point in the sliver between a seam's chordal polygon and the circle it approximates \u2014 outside the polygon by seven thousandths, inside the circle by four hundredths, and 0.028 inside the sphere against a 1e-5 tolerance. Two representations of one boundary, consulted by two different steps, disagree in the band between them."
      },
      {
        "type": "p",
        "text": "Also records the interior-fan-apex attempt that was built, measured and reverted: it removed the flat lid a planar seam ring leaves on a curved cap, but did not fix the target configurations and redefines what toMesh(0) means, which is a decision to take on its own terms."
      }
    ]
  },
  {
    "slug": "a-face-s-sample-point-needs-clearance-not-just-membership",
    "title": "A face's sample point needs clearance, not just membership",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "A face's sample point decides how the whole face is classified, so \"on the material\" is not a strong enough property for it.",
    "sha": "6e4999e",
    "content": [
      {
        "type": "p",
        "text": "A face's sample point decides how the whole face is classified, so \"on the material\" is not a strong enough property for it."
      },
      {
        "type": "p",
        "text": "Every ring the sample test uses is a CHORDAL POLYGON standing in for the face's real boundary, and for a boolean seam the real boundary is a circle. Between the polygon and the circle lies a sliver \u2014 bounded by the polygon's inradius and its circumradius \u2014 that is outside the polygon and inside the true curve. A point there passes point-in-polygon and is nonetheless not on the face."
      },
      {
        "type": "p",
        "text": "MEASURED on box(2\u00b3) against sphere(r1.2) offset 0.1: the +X annulus was sampled at radius 0.750609 from the seam centre, where the twelve-sided hole polygon has inradius 0.743719 and the true seam circle has radius 0.793725 \u2014 outside the polygon by seven thousandths, inside the circle by four hundredths. classifyPoint judged that point against the SPHERE rather than the polygon and reported the annulus as touching it; selectFace read OnBoundary as a coincident-face pair and KEPT a face whose material is entirely outside. Every seam edge then had three users and the sew refused."
      },
      {
        "type": "p",
        "text": "Not a tolerance problem: the sample sat 0.028 inside the sphere, nearly three thousand times the 1e-5 tolerance. The point was in the wrong place."
      },
      {
        "type": "p",
        "text": "FIX: generate the same candidates in the same order, but keep the one with the greatest CLEARANCE from every boundary ring instead of the first that passes. Ties keep the earlier, so the choice stays deterministic \u2014 which the classification consuming it requires."
      },
      {
        "type": "p",
        "text": "RESULT: box/sphere at offsets 0.1 and 0.3 (r=1.2) sew, having had empty intersection and difference. Both conservation identities hold at float precision at every refinement."
      },
      {
        "type": "p",
        "text": "TWO THINGS THIS CORRECTS IN THE RECORD, both from my own earlier notes:"
      },
      {
        "type": "p",
        "text": "1. \"The offset cylinder's Difference alone fails\" was an artifact of the baseline fixture using r=1, which is EXACTLY TANGENT to the box's side walls. Surveying radius against offset: all 21 generic configurations sew for all three operators, and every failure is an exact tangency. The r=1 Difference is genuinely NON-MANIFOLD \u2014 the four tangent generatrices each end up with four faces, because the solid pinches to zero thickness along them \u2014 so fromFaces is right to refuse and empty is the contract working, not a gap."
      },
      {
        "type": "p",
        "text": "2. An attempt to fix this by giving curved faces an interior fan apex was built, measured and REVERTED. It did remove the flat lid the seam ring leaves (probe distance 0 -> 7.3e-2, and unlike the fan it survives refinement), but it did not fix the target configurations and it broke 6 tests that deliberately pin toMesh(0) to the exact chord arithmetic. It silently redefines what subdivision zero means; that is its own decision, not a side effect of this one."
      },
      {
        "type": "p",
        "text": "test_BRepFaceSampleClearance.cpp (5 tests), asserting the sample against the ANALYTIC seam circle rather than the polygon that admitted the bad point, plus determinism, planar-face compatibility, and a characterization that exact tangencies still return clean empty results. Load-bearing by revert: 3 of 5."
      },
      {
        "type": "p",
        "text": "Suite 2536 ran / 2531 pass / 5 hardware skips. (One earlier run dumped core inside the Vulkan software-rasterizer path; not reproduced in three subsequent Vulkan-only runs or two geometry-only runs, and untouched by this change.)"
      }
    ]
  },
  {
    "slug": "chapter-43-the-third-time-is-the-confession",
    "title": "Chapter 43 \u2014 the third time is the confession",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "Box against sphere at offset 0.5 worked and at 0.7 was empty, and the only difference was that eight crossings landed at s = 0.9999999999999999 in one and a few ulp past 1 in the other.",
    "sha": "35bc339",
    "content": [
      {
        "type": "p",
        "text": "Box against sphere at offset 0.5 worked and at 0.7 was empty, and the only difference was that eight crossings landed at s = 0.9999999999999999 in one and a few ulp past 1 in the other."
      },
      {
        "type": "p",
        "text": "The chapter's point is that this is the third time the same rule has been needed \u2014 cylinder uprights, sphere arcs, now the planar path \u2014 and that it is one cause rather than three: each solver assumes the circle cuts through the middle of an edge, and the imprint's own progress is what invalidates that, since every cut lands a vertex on a neighbour's boundary. Also records why the crossing sits on a vertex NECESSARILY rather than by accident: two seams cut by faces sharing an edge are sections of the same sphere and must meet where it crosses that edge."
      },
      {
        "type": "p",
        "text": "Notes the baseline's retirement: it existed to pin three curved pairs as empty, all have flipped, and the one result still empty is named on its own line rather than folded into a loop."
      }
    ]
  },
  {
    "slug": "a-seam-crossing-that-lands-on-a-vertex-must-still-count",
    "title": "A seam crossing that lands on a vertex must still count",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "Two seam circles cut by two box faces that share an edge MEET on that edge. Not by coincidence \u2014 necessarily: both are sections of the same sphere, so their common points are exactly where the sphere crosses the shared e",
    "sha": "73cea71",
    "content": [
      {
        "type": "p",
        "text": "Two seam circles cut by two box faces that share an edge MEET on that edge. Not by coincidence \u2014 necessarily: both are sections of the same sphere, so their common points are exactly where the sphere crosses the shared edge. Whichever face is imprinted first splits the edge there, and the second circle then meets that edge precisely AT a vertex."
      },
      {
        "type": "p",
        "text": "The planar circle-versus-segment solver required a strictly interior root, so whether that crossing was seen came down to which side of the endpoint the arithmetic landed on."
      },
      {
        "type": "p",
        "text": "MEASURED on box(2\u00b3) against sphere(r1.2). At offset 0.5 all eight crossings on the exit face came back at s = 0.9999999999999999 \u2014 a few ulp inside \u2014 were accepted, and the face was cut into its five pieces. At offset 0.7 the same eight landed a few ulp the other side of 1, every boundary edge reported ZERO crossings, and the face was left uncut and straddling: ten box faces where fourteen were owed, and all three operators empty. The two configurations differ by nothing structural."
      },
      {
        "type": "p",
        "text": "Now the solver takes a length tolerance on the segment's own ends, accepts a root within it, and clamps \u2014 the caller's existing snap then reuses the vertex already there. Two roots snapping to the same end count once."
      },
      {
        "type": "p",
        "text": "This is the third time this rule has been needed: the cylinder's uprights, then the sphere's bounding arcs, now the oldest of the three paths. Each solver was written for the case where the circle cuts through the middle of an edge, and it is the imprint's OWN progress that stops that being true \u2014 every cut a face makes lands a vertex on some neighbour's boundary."
      },
      {
        "type": "p",
        "text": "RESULT: box/sphere at offset 0.7 sews, having been empty for all three operators. U=125 / I=49 / D=53, watertight, both validators clean, and BOTH conservation identities hold at float level at every refinement \u2014 U+I == A+B and D+I == A within 3.2e-08."
      },
      {
        "type": "p",
        "text": "The curved-boolean baseline's characterization is retired: it existed to pin these pairs as empty and every fixture in it has now flipped, so it becomes an assertion that they stay working. The ONE result still empty among them \u2014 the offset cylinder's difference, whose union and intersection both sew \u2014 is named individually rather than averaged into a loop."
      },
      {
        "type": "p",
        "text": "test_BRepSeamCrossingAtVertex.cpp (5 tests), including one asserting the shared crossing is forced by the geometry rather than by the fixture, and guards that a clear miss and an exact tangency are still not cut. Load-bearing by revert: 2 of 5 plus the baseline."
      },
      {
        "type": "p",
        "text": "Suite 2531 ran / 2526 pass / 5 hardware skips, zero regressions."
      }
    ]
  },
  {
    "slug": "chapter-42-where-the-ring-happened-to-start",
    "title": "Chapter 42 \u2014 where the ring happened to start",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "The Difference volume residual, traced to a fan triangulation that started at whichever vertex the ring happened to begin with. Free for a planar face; decisive for a curved patch, whose two diagonals span different surf",
    "sha": "86bafb3",
    "content": [
      {
        "type": "p",
        "text": "The Difference volume residual, traced to a fan triangulation that started at whichever vertex the ring happened to begin with. Free for a planar face; decisive for a curved patch, whose two diagonals span different surfaces."
      },
      {
        "type": "p",
        "text": "Records both hypotheses that were killed by measurement first \u2014 lost arcs (Circle-edge counts identical, 142/142) and ring reversal (volume-neutral on a closed body, 0.000e+00 at every level) \u2014 and why the second was right about the mechanism and wrong about the test: reversing a CLOSED sphere cancels against its own symmetry, and a Boolean keeps a partial patch with nothing left to cancel against."
      },
      {
        "type": "p",
        "text": "The habit worth carrying: an invariant measured over a complete symmetric object can be satisfied by errors that annihilate in pairs. Measure it where the symmetry has been cut away."
      },
      {
        "type": "p",
        "text": "Closing paragraph updated: the Difference residual leaves the still-owed list, one chapter after joining it."
      }
    ]
  },
  {
    "slug": "the-fan-apex-decided-how-much-space-a-curved-patch-enclosed",
    "title": "The fan apex decided how much space a curved patch enclosed",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "Difference was watertight, valid and a few parts in ten thousand short of the volume it owed. Every invariant this kernel owns is topological \u2014 checkIntegrity, checkGeometry, isClosed, Euler \u2014 and none of them weighs any",
    "sha": "11a87ab",
    "content": [
      {
        "type": "p",
        "text": "Difference was watertight, valid and a few parts in ten thousand short of the volume it owed. Every invariant this kernel owns is topological \u2014 checkIntegrity, checkGeometry, isClosed, Euler \u2014 and none of them weighs anything, so nothing caught it."
      },
      {
        "type": "p",
        "text": "The identity that does is D + I == A: difference and intersection partition the first operand, and the shared patch (the part of B's surface inside A) appears once in each with opposite orientation, so it must cancel."
      },
      {
        "type": "p",
        "text": "CAUSE: a face was fan-triangulated from `ring[0]` \u2014 wherever the ring happened to START. Harmless for a planar face, since every fan of a planar polygon encloses the same volume. Decisive for a CURVED patch: a four-vertex patch on a sphere is not planar and its two diagonals span different surfaces. Difference reverses the vertex ring of every face taken from the second operand, a reversed ring starts at a different vertex, and so the SAME patch was triangulated one way in the intersection and the other way in the difference."
      },
      {
        "type": "p",
        "text": "MEASURED on box(2\u00b3)/sphere(r1.2) offset 0.5 by splitting the emitted triangles by the surface they lie on: box triangles summed to 8.000000010, exactly right, while the 116 shared sphere triangles gave +2.189830002 in the intersection and -2.192173031 in the difference. That residual was the entire deficit."
      },
      {
        "type": "p",
        "text": "FIX: choose the apex by GEOMETRY \u2014 the lexicographically smallest vertex position \u2014 instead of by ring order. A fan from a fixed apex emits the same diagonals whichever way the ring is traversed; only the winding flips, which is what is wanted. The two copies now cancel to 0.0 rather than to 2.3e-03. Planar faces are unaffected by construction."
      },
      {
        "type": "p",
        "text": "Two measurements were needed to know it was worth fixing rather than tolerating. It did NOT shrink under refinement \u2014 across subdivisions 0 to 4 it converged on -2.61e-04 instead of tending to zero, so it was volume the triangulation never enclosed, not a sampling error. And two hypotheses were killed first, by measurement: arcs are NOT lost in Difference (Circle-edge counts are identical, 142/142), and reversing a closed body's rings is volume-neutral (0.000e+00 at every level) \u2014 the effect only appears on a PARTIAL patch, where the whole-body cancellation is not there to hide it."
      },
      {
        "type": "p",
        "text": "test_BRepVolumeConservation.cpp (5 tests): the D+I identity at three refinements across seven configurations, the shared patch asserted to cancel to 1e-9 (which names the mechanism \u2014 a volume test alone could be met by two errors that offset), the U+I identity, planar booleans asserted EXACTLY, and primitive volumes pinned. The characterization added in the previous commit is deleted rather than loosened. Load-bearing by revert: 2 of 5 fail."
      },
      {
        "type": "p",
        "text": "Suite 2526 ran / 2521 pass / 5 hardware skips, zero regressions."
      }
    ]
  },
  {
    "slug": "chapter-41-refusing-to-cut-is-not-the-safe-option",
    "title": "Chapter 41 \u2014 refusing to cut is not the safe option",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "imprintCurve handled two boundary crossings and refused anything else. The chapter's point is that the refusal was not conservative: the imprint's whole contract is that no face straddles the other solid, and refusing le",
    "sha": "e53a12c",
    "content": [
      {
        "type": "p",
        "text": "imprintCurve handled two boundary crossings and refused anything else. The chapter's point is that the refusal was not conservative: the imprint's whole contract is that no face straddles the other solid, and refusing leaves exactly that, with nothing downstream positioned to notice."
      },
      {
        "type": "p",
        "text": "Records the survey-first approach that found it \u2014 fourteen configurations reporting imprint success, operand validity, duplicates and complement arcs, all clean \u2014 so the search moved to what the imprint had left UNDONE rather than what it had done wrong."
      },
      {
        "type": "p",
        "text": "Also records what the chapter does not claim: Difference is watertight and a few parts in ten thousand short on volume. Two measurements place it \u2014 refining converges on -2.61e-4 instead of tending to zero, so it is missing volume rather than tessellation; and reverting this change and re-measuring on configurations that already sewed shows it is older than this work."
      }
    ]
  },
  {
    "slug": "a-circle-may-cross-a-face-s-boundary-more-than-twice",
    "title": "A circle may cross a face's boundary more than twice",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "feat",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "imprintCurve handled exactly two crossings \u2014 one arc bite \u2014 plus the case of both landing on a single edge. Anything else was refused. That sounds conservative and is the opposite: a refused imprint leaves the face STRAD",
    "sha": "84a1e42",
    "content": [
      {
        "type": "p",
        "text": "imprintCurve handled exactly two crossings \u2014 one arc bite \u2014 plus the case of both landing on a single edge. Anything else was refused. That sounds conservative and is the opposite: a refused imprint leaves the face STRADDLING the other solid, which is the one state the imprint exists to eliminate. The face is then classified whole, from a single sample point, and everything on the far side of the circle goes with it."
      },
      {
        "type": "p",
        "text": "The configuration is ordinary, not exotic. Push a sphere off-centre through a box and the face it exits is cut in a circle LARGER than that face's inradius but smaller than its half-diagonal, so the circle leaves and re-enters through all four edges: eight crossings, four arcs inside the face alternating with four outside. MEASURED on box(2\u00b3) against sphere(r1.2) offset 0.5, the +X face came out as ONE 16-vertex face spanning the whole plane, classified Inside from its centre at (1,0,0) and dropped entire \u2014 24 boundary edges left with one face instead of two, all three operators empty. Concentric was unaffected only because there the circle is smaller than the face and takes the fully-interior path."
      },
      {
        "type": "p",
        "text": "Crossings are now ordered around the CIRCLE (not along the boundary, which is unrelated once more than one edge is involved), consecutive pairs bound arcs that alternate inside and outside, and the inside ones are the cuts. Two details that are not incidental: every crossing is resolved to a vertex BEFORE any face is cut, by absolute parameter and splitting each shared edge from its far end inward, because several crossings land on one edge and a fraction goes stale the moment it is split; and all cuts are made in ONE call rather than one per driver pass, because a face cut once carries the arc on its boundary and the already-segmented guard \u2014 right to stop a face being bitten along its own rim \u2014 would refuse the rest."
      },
      {
        "type": "p",
        "text": "RESULT: the +X face now segments into exactly 4 corner pieces (Outside) and 1 middle piece (Inside), each matching a closed-form oracle. Offset box/sphere sews at r=1.2 dx=0.5/0.9 and r=0.8 dx=0.5/0.7/0.9, and OFFSET BOX/CYLINDER sews \u2014 the last pair the curved-boolean baseline still pinned empty. All watertight, both validators clean, inclusion-exclusion U+I == A+B at ~3e-8 throughout."
      },
      {
        "type": "p",
        "text": "PINNED, NOT FIXED: Difference does not conserve volume on some offsets \u2014 D + I falls short of A by a few parts in ten thousand. It is PRE-EXISTING, measured by reverting this change on configurations that already sewed (r=0.8 at dx 0.5/0.7/0.9 gave -4.06e-4 / -3.39e-4 / -2.03e-4 before it); the bite only makes it reachable in more places. It is NOT a tessellation artifact \u2014 refining converges on the constant -2.61e-4 rather than tending to zero. Characterized with bounds on both sides so it can neither drift nor be silently fixed, and so the watertight assertions here are not read as saying Difference is correct."
      },
      {
        "type": "p",
        "text": "test_BRepMultiCrossingBite.cpp (5 tests); load-bearing by revert, 4 of 5 fail plus the baseline. Suite 2522 ran / 2517 pass / 5 hardware skips."
      }
    ]
  },
  {
    "slug": "chapter-40-the-long-way-round",
    "title": "Chapter 40 \u2014 the long way round",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "The fault had not moved downstream. It was four layers upstream in a single arc that went the long way round a circle, sharing both endpoints with the right one and therefore satisfying every invariant the kernel owns.",
    "sha": "10e1517",
    "content": [
      {
        "type": "p",
        "text": "The fault had not moved downstream. It was four layers upstream in a single arc that went the long way round a circle, sharing both endpoints with the right one and therefore satisfying every invariant the kernel owns."
      },
      {
        "type": "p",
        "text": "Records the correction in full rather than quietly: the 2.7e-08 float narrowing found on the way matched the observed vertex gap exactly and was written up as the cause. It was not. Widening it made the two rings agree to 5.6e-17 and left all ten duplicate pairs and the sew census unchanged \u2014 they were duplicates, not near-misses. Third occurrence of that failure mode in five chapters, and the first where the reasoning was about my own fix."
      },
      {
        "type": "p",
        "text": "Also records why the first draft of the test was worthless: it asserted the arc span after imprintMutually, by which point the reconcile pass has cut the offending arc into eleven ordinary-looking pieces. It passed with the fix reverted. Assert the distinguishing quantity where it is still distinguishable."
      },
      {
        "type": "p",
        "text": "Closing paragraph updated: box/sphere leaves the still-owed list for the concentric case, and the offset case takes its place."
      }
    ]
  },
  {
    "slug": "the-imprint-could-pick-the-arc-going-the-long-way-round",
    "title": "The imprint could pick the arc going the long way round",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "When an imprint cuts a face along a circle, two arcs share the cut's endpoints and exactly one lies inside the face. The selector tested ONE candidate and flipped if it came back outside \u2014 sound only while the containmen",
    "sha": "3a0d009",
    "content": [
      {
        "type": "p",
        "text": "When an imprint cuts a face along a circle, two arcs share the cut's endpoints and exactly one lies inside the face. The selector tested ONE candidate and flipped if it came back outside \u2014 sound only while the containment test is trustworthy, and for a curved face it is not."
      },
      {
        "type": "p",
        "text": "Containment on a curved patch is decided in the surface's (u,v) domain, and a sphere's parametrisation is SINGULAR at \u00b1uAxis, where v is an atan2 with no value. makeSphere puts uAxis on X while its tessellation's grid poles are on Z, so the singularity sits in the middle of ordinary patches near \u00b1X \u2014 exactly where a box's \u00b1X faces cut their seam."
      },
      {
        "type": "p",
        "text": "MEASURED on box(2\u00b3)/sphere(r1.2, 8x12): of 72 seam arcs, 71 discriminate cleanly and ONE reports BOTH candidates outside. Flipping on that answer chose an arc spanning 6.0333 rad where the truth is 0.2499 \u2014 96% of the circle."
      },
      {
        "type": "p",
        "text": "Now both candidates are tested. When they discriminate, that decides exactly as before. When they do not, the tie breaks on the face's own boundary box: the arc lying in the face cannot leave it, while the complement leaves immediately, and the box never evaluates the parametrisation, which is why it survives the singularity. Verified rather than assumed \u2014 it agrees with the (u,v) test on all 71 discriminating cases in both directions (65 keep, 6 flip) and resolves the 1 it cannot answer."
      },
      {
        "type": "p",
        "text": "WHY IT WAS SILENT, and the reason the test asserts a span: both arcs reproduce their own endpoints, so checkGeometry, checkIntegrity, isClosed and Euler are all satisfied by the complement. The damage surfaced four layers away \u2014 the long arc swallowed ten ring vertices belonging to its neighbours, the reconcile pass split it at each of them, splitEdge manufactured a fresh vertex at ten positions where the sphere already had one, the sew's weld collapsed the pairs, every seam edge gained a third user, and fromFaces correctly refused. Box against sphere returned empty for all three operators."
      },
      {
        "type": "p",
        "text": "RESULT: concentric box/sphere sews. r=1.2 gives U=102 / I=78 / D=78 faces, all watertight with both validators clean and inclusion-exclusion U+I == A+B exact to 0. r=0.8 (sphere strictly inside) gives the answers by name \u2014 union IS the box's 6 faces, intersection IS the sphere's 96, difference is the 102-face box carrying a spherical void. Offset box/sphere and box/cylinder still bail; watertight-or-empty holds across the whole sweep."
      },
      {
        "type": "p",
        "text": "test_BRepArcComplementSelection.cpp (5 tests). NOTE the span assertion runs on a ONE-WAY imprint: by the end of imprintMutually the reconcile pass has already subdivided the offending arc into eleven ordinary-looking pieces, so asserting the span after it silently checks nothing \u2014 caught because the first draft passed with the fix reverted. Load-bearing by revert: 3 of 5 fail, naming the edge and both spans."
      },
      {
        "type": "p",
        "text": "Suite 2517 ran / 2512 pass / 5 hardware skips, zero regressions."
      }
    ]
  },
  {
    "slug": "the-seam-radius-was-rounded-to-float-between-two-doubles",
    "title": "The seam radius was rounded to float between two doubles",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "`Surface::radius` is a double, `Curve::radius` is a double, and every branch of intersectSurfaces computes its result as a double \u2014 sqrt(R\u00b2\u2212d\u00b2) for a plane section, the chord formula for sphere against sphere. The one fi",
    "sha": "062f069",
    "content": [
      {
        "type": "p",
        "text": "`Surface::radius` is a double, `Curve::radius` is a double, and every branch of intersectSurfaces computes its result as a double \u2014 sqrt(R\u00b2\u2212d\u00b2) for a plane section, the chord formula for sphere against sphere. The one file-local helper that assembled the Curve took its radius as a FLOAT, so the value was rounded on the way between two double quantities. One word."
      },
      {
        "type": "p",
        "text": "This is the same failure mode the double migration ended on and the same place it hides: not in a declaration, but in a three-line helper's parameter, where the type that matters is neither the input's nor the output's. BRepSurfaceIntersect had already had its `dot` widened for exactly this reason; `circleCurve` was missed."
      },
      {
        "type": "p",
        "text": "MEASURED on box(2\u00b3) against sphere(r=1.2): the seam came back with radius 0.66332507133483887 where the exact value is 0.66332504433416373 \u2014 out by 2.7e-08, float resolution at unit scale and nothing to do with the geometry. What makes it bite is that the two operands do not both inherit it: the box's ring is cut AT the reported radius while the sphere's ring is pinned to the sphere and the cutting plane and lands at the true one, so a single circle becomes two concentric rings 2.7e-08 apart. Widened, they agree to 5.6e-17."
      },
      {
        "type": "p",
        "text": "test_BRepSeamRadiusPrecision.cpp (4 tests), asserting RELATIVE agreement at scale 1, 1e3 and 1e6. Both halves matter: a float in the chain is a fixed relative error, so a single-scale absolute bound can be satisfied by shrinking the model instead of fixing the arithmetic \u2014 which is how this survived the migration. Load-bearing by revert: the float misses 1e-15 by seven orders, and its relative error GROWS with scale (3.1e-09 \u2192 3.5e-08), which is the signature itself. Tangency still reports Point, not a zero-radius Circle."
      },
      {
        "type": "p",
        "text": "SCOPE, stated plainly: this is a real narrowing and it is fixed, but it is NOT why box/sphere sews to empty. That failure survives the fix unchanged, so the comment in the source says so rather than claiming a cure."
      },
      {
        "type": "p",
        "text": "Suite 2512 ran / 2507 pass / 5 hardware skips, zero regressions."
      }
    ]
  },
  {
    "slug": "chapter-39-six-bites-and-no-ring",
    "title": "Chapter 39 \u2014 six bites and no ring",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "The sphere took its seam and every invariant said yes: closed shell, clean validators, Euler two, vertices on the sphere to 2.2e-16, classification exact against a closed-form oracle. The seam was six disconnected bites.",
    "sha": "02e3341",
    "content": [
      {
        "type": "p",
        "text": "The sphere took its seam and every invariant said yes: closed shell, clean validators, Euler two, vertices on the sphere to 2.2e-16, classification exact against a closed-form oracle. The seam was six disconnected bites."
      },
      {
        "type": "p",
        "text": "The chapter's point is the fifth habit, and the sharpest one: when a change alters the CONNECTIVITY of something, no invariant over the whole body reports on it. Count the thing itself."
      },
      {
        "type": "p",
        "text": "Also records why a rule already learned in chapter 33 had to be learned again \u2014 on a cylinder the endpoint crossing is an edge case, on a sphere it is the whole behaviour \u2014 and why the inclusion-exclusion check had to be taken against the imprinted operands rather than the pristine ones."
      },
      {
        "type": "p",
        "text": "The closing paragraph is updated: the sphere imprint leaves the still-owed list, box/sphere stays with its remaining fault located."
      }
    ]
  },
  {
    "slug": "a-sphere-can-take-a-seam-and-the-seam-closes-into-a-ring",
    "title": "A sphere can take a seam \u2014 and the seam closes into a ring",
    "date": "2026-07-31",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "Two things had to be true, and only the first was obvious.",
    "sha": "1bb3700",
    "content": [
      {
        "type": "p",
        "text": "Two things had to be true, and only the first was obvious."
      },
      {
        "type": "p",
        "text": "circleLiesOnSurface handled Plane and Cylinder and refused everything else, so every Circle seam offered to a spherical face died at the guard. A cylinder contains one family of circles; a sphere contains EVERY plane section, which is exactly what a box face or a second sphere cuts. The condition: centre-to-centre must lie along the circle's own axis, and |d|\u00b2 + r\u00b2 must equal R\u00b2."
      },
      {
        "type": "p",
        "text": "The second was that a crossing sitting exactly AT a boundary endpoint has to count. The straight-edge path already knew this (C4d); the arc path did not, and the reason it had to be learned twice is that on a cylinder it looks like a special case and on a sphere it is the general one. A cylinder's side patch has two straight uprights to carry its crossings; a lat-lon patch is bounded by FOUR ARCS and has no straight edge anywhere, so every crossing on a sphere is an arc crossing \u2014 and the moment one patch is cut, its neighbours' shared arcs are already split at that very point. Demanding a strictly interior fraction reported those neighbours uncrossed."
      },
      {
        "type": "p",
        "text": "That failure is quiet, which is the finding worth keeping. Measured on box(2\u00b3)/sphere(r1.2, 8\u00d712), each seam came out as 6 disconnected arc bites whose 12 endpoints were ALL degree 1 \u2014 while the body stayed closed, both validators stayed clean, and every vertex sat on the sphere to 2.2e-16. No topological or geometric invariant is a witness here; only a census of the seam's own connectivity tells a ring from confetti. Admitting the endpoint takes each seam to 12 edges over 12 vertices, every one degree 2."
      },
      {
        "type": "p",
        "text": "THE PAYOFF: sphere/sphere booleans now close \u2014 the oldest empty entry in the curved-boolean baseline. All three ops watertight with both validators clean at dx = 0.5 / 1.0 / 1.5, and inclusion-exclusion U+I == A+B holds to ~3e-8 relative at every refinement level. That identity is measured against the MUTUALLY IMPRINTED operands, not the pristine ones: the output carries the seam vertices and the pristine operands do not, so comparing against those measures tessellation density (~5e-2) rather than volume."
      },
      {
        "type": "p",
        "text": "test_BRepSphereFaceImprint.cpp (8 tests). Load-bearing verified by individual revert: dropping the arc-endpoint rule fails 3, dropping the sphere containment case fails 7. Suite 2508 ran / 2503 pass / 5 hardware skips, zero regressions."
      },
      {
        "type": "p",
        "text": "STILL EMPTY, and now the next blocker: box/sphere. Its seams imprint correctly (72 cuts, 6 closed rings, both operands closed and valid) and its face classification is exact \u2014 0 disagreements over 131 sphere faces against a closed-form oracle \u2014 so the fault is downstream in the sew."
      }
    ]
  },
  {
    "slug": "the-loose-weld-band-is-a-modeling-scale-not-a-float-workarou",
    "title": "The loose weld band is a modeling scale, not a float workaround",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "docs"
    ],
    "category": "Commit",
    "excerpt": "The previous increment claimed the mesh boolean needs the loose coincidence tolerance because it runs on float Mesh positions, and that a mesh-side double migration would let the band tighten. That was reasoned from stru",
    "sha": "7cd81f9",
    "content": [
      {
        "type": "p",
        "text": "The previous increment claimed the mesh boolean needs the loose coincidence tolerance because it runs on float Mesh positions, and that a mesh-side double migration would let the band tighten. That was reasoned from structure, not measured, and it is wrong."
      },
      {
        "type": "p",
        "text": "Probed at a tightened 1e-6, exactly ONE configuration out of 300 leaks \u2014 one sphere offset, failing under all three operators. A precision limit would scatter failures across the fixture in proportion to seam length; a single repeat offender is a piece of geometry, not a resolution profile. The unweldable points are 3.19e-06 apart, ~25x float epsilon at unit scale, and the geometry is explicit:"
      },
      {
        "type": "p",
        "text": "v64  (-0.126088738, 0.526467443, 1.000000000)  seam crossing on the box face v66  (-0.126070619, 0.526456952, 1.000000000)  seam crossing on the box face v204 (-0.126087785, 0.526467562, 0.999996960)  a SPHERE VERTEX, 3.04e-06 below"
      },
      {
        "type": "p",
        "text": "All three lie on the sphere within a micron of its 1.2 radius. The sphere grazes the box's top face closely enough that its tessellation drops a vertex three microns under the plane while the seam crossing lands exactly on it. Whether those are one point or two is the coincidence decision itself. Widening the boolean's arithmetic would not move it by a bit \u2014 the distance is real."
      },
      {
        "type": "p",
        "text": "So tightening the band is not a cleanup enabled by better arithmetic; it redefines what \"the same point\" means, and a grazing sphere then cannot close its seam. The Phase-T rule applies to this book's own conclusion: verify an epsilon's problem is reachable and fixable before migrating it. This one is neither."
      },
      {
        "type": "p",
        "text": "test_MeshBooleanGrazingCoincidence pins it by measurement, not by the fixture's random seed: the grazing gap is bounded on BOTH sides (>1e-7 so it cannot be rounding, <1e-5 so the configuration still grazes), the vertex is verified to lie on the sphere rather than being a cut artifact, and the case is asserted watertight at 0.01x, 1x and 100x model size \u2014 which is what separates a coincidence scale from a constant fitted to one fixture."
      },
      {
        "type": "p",
        "text": "Logbook chapter 38; design-decisions and both closing passages corrected. 2502/2502."
      }
    ]
  },
  {
    "slug": "the-float-coordinate-entry-is-now-a-reversal-not-an-open-que",
    "title": "The float-coordinate entry is now a reversal, not an open question",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "decisions"
    ],
    "category": "Commit",
    "excerpt": "It was written as \"the one that is still open\" with a staged migration plan. The migration is executed, so the entry records the outcome: the namespace-alias lever, the three corrections the plan missed (primitives migra",
    "sha": "47422cc",
    "content": [
      {
        "type": "p",
        "text": "It was written as \"the one that is still open\" with a staged migration plan. The migration is executed, so the entry records the outcome: the namespace-alias lever, the three corrections the plan missed (primitives migrate together, transform narrowed through a float Mat4, a relabelled blob is not a compatibility fixture), the precision ceiling that lived in file-local helper return values rather than in any declaration, and the measured before/after across four orders of scale."
      },
      {
        "type": "p",
        "text": "Also records why Tolerance did not come with it: of the six tests that block a tighter band, five pin the constants and one is a real limit on the still-float mesh boolean."
      }
    ]
  },
  {
    "slug": "chapter-37-the-double-migration-and-the-four-calls-that-kept",
    "title": "Chapter 37 \u2014 the double migration and the four calls that kept float",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "Covers the whole arc that closes one of the two decisions chapter 36 left open: the namespace-alias lever, the v4 format and why a relabelled current blob is not a compatibility fixture, the primitives-migrate-together l",
    "sha": "fc3f676",
    "content": [
      {
        "type": "p",
        "text": "Covers the whole arc that closes one of the two decisions chapter 36 left open: the namespace-alias lever, the v4 format and why a relabelled current blob is not a compatibility fixture, the primitives-migrate-together lesson (widening the cylinder alone made the box worse), and the precision ceiling \u2014 four file-local helpers returning float, which no declaration on the path could show."
      },
      {
        "type": "p",
        "text": "Updates the closing passage: coordinates are no longer an open decision, the tolerance band is now known to belong to the mesh side rather than the B-rep, and the remaining gaps are re-listed. 4 parts, 37 chapters."
      }
    ]
  },
  {
    "slug": "lift-the-b-rep-s-precision-ceiling-the-last-floats-were-in-t",
    "title": "Lift the B-rep's precision ceiling \u2014 the last floats were in the helpers",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "The B-rep's storage, parameters, primitives and serialization were all widened to double, and yet a vertex still disagreed with its own curve by 4.371e-08 \u2014 single precision \u2014 at every scale. The fingerprint said so exac",
    "sha": "47f0658",
    "content": [
      {
        "type": "p",
        "text": "The B-rep's storage, parameters, primitives and serialization were all widened to double, and yet a vertex still disagreed with its own curve by 4.371e-08 \u2014 single precision \u2014 at every scale. The fingerprint said so exactly: 0.5\u00b7sin(float pi) is 4.3711390e-08, a radius times the error in a float-rounded pi."
      },
      {
        "type": "p",
        "text": "Every declaration on the path was already double. The narrowing was in return values and locals three calls down:"
      },
      {
        "type": "p",
        "text": "float dot(const Vec3&, const Vec3&)   // every projection and every angle float length(const Vec3&)             // every distance float et0, et1                        // the imprint's arc parameter pair float fA, fB, pa1, pa2, s, R, area    // crossing fractions and edge parameters float getc/setc(Vec3&, int, float)    // read/write of Vec3 components segmentLineCrossing(..., float&)      // the line-crossing solver's output"
      },
      {
        "type": "p",
        "text": "An arc parameter is atan2(dot(w, bi), dot(w, ref)); atan2 cannot return a double angle from float arguments, so each parameter was rounded on its way out of a three-line helper however wide the points were."
      },
      {
        "type": "p",
        "text": "Measured, worst curve/vertex mismatch on a cylinder-through-box imprint:"
      },
      {
        "type": "p",
        "text": "scale        box        cylinder     relative 1        4.371e-08 -> 2.001e-16   4.371e-08 -> 1.531e-16    2.0e-16 100      4.371e-06 -> 1.589e-14   4.371e-06 -> 1.531e-14    1.6e-16 10000    4.371e-04 -> 2.417e-12   4.371e-04 -> 1.531e-12    2.4e-16"
      },
      {
        "type": "p",
        "text": "The relative error is now constant at ~2e-16 across four orders of scale, which is the double signature; a float in the chain shows up as a fixed ~1e-7 that grows in absolute terms with the model. Testing one scale cannot tell the two apart, which is why this survived the whole migration."
      },
      {
        "type": "p",
        "text": "test_BRepPrecisionCeiling pins it by MEASUREMENT, not by inspecting types \u2014 the defect was invisible in the types. It asserts both operands (the box's arcs and the cylinder's seam ring were rounded by different helpers; fixing one left the other at 4.371e-08, so a single-body assertion would have passed a body that was still entirely single-precision), asserts the bound relatively across scale, and checks the direct fingerprint that a half-turn arc parameter is double pi rather than float pi. That fingerprint test is what caught the second helper."
      },
      {
        "type": "p",
        "text": "2499/2499."
      },
      {
        "type": "p",
        "text": "Tolerance re-tightening remains blocked, and now by a known cause. At 1e-6/1e-7, six tests fail: four Tolerance.* and MeshBooleanSeam.NearCoincidentFaces... pin the constants themselves and would move with them, but MeshBooleanSeam.CurvedOperandBooleansAreWatertightThroughModerateTessellation is a real limit \u2014 the mesh boolean runs on float Mesh positions and needs the loose weld band to stay watertight. Nothing in the B-rep needs it any more."
      }
    ]
  },
  {
    "slug": "the-b-rep-s-construction-math-is-double-too-primitives-param",
    "title": "The B-rep's construction math is double too \u2014 primitives, parameters, crossings",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "feat",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "The stage the previous commit named. Widening storage alone bought nothing end to end, because a double vertex holding a float-accurate point is still float-accurate. This moves the arithmetic that PLACES geometry.",
    "sha": "6a7f31e",
    "content": [
      {
        "type": "p",
        "text": "The stage the previous commit named. Widening storage alone bought nothing end to end, because a double vertex holding a float-accurate point is still float-accurate. This moves the arithmetic that PLACES geometry."
      },
      {
        "type": "p",
        "text": "- All 14 primitive builders place their vertices in double: makeBox, makeOpenBox, makeCylinder, makeCone, makeSphere, makeFacetedCylinder, makeFacetedSphere, makeTube, makePyramid, extrudeProfile, loftProfiles, twistExtrude, revolveProfile and its partial form. They had to move TOGETHER -- the previous commit measured what happens otherwise: widening makeCylinder alone improved the cylinder (5.9e-8 -> 4.4e-8) and made the box WORSE (1.24e-7), because a double-built cylinder's seam vertices agree with a float-built box's less well than two float-built ones did. - Curve/Surface eval take a DOUBLE parameter, and radii are double. A double position evaluated at a float angle is only accurate to float, which is what the first cut measured: 6e-8 relative, unmoved, because the angle was the limit and not the point. - Edge::t0/t1, splitEdge's fraction, setEdgeArc's radius, paramOnCurve's return, the circle/segment crossing solver and every angle constant are double. Found by chasing an imprinted vertex sitting at z = 1.0000000596046448 -- which is 1 + 2^-24, the float just above 1.0, so a float intermediate was still placing it. - Serialization v4 carries radii and edge parameters as double alongside the positions, and still reads v1-v3 as float."
      },
      {
        "type": "p",
        "text": "MEASURED: the worst mismatch between an edge's curve and the vertices it must reproduce, on a cylinder-through-box imprint, is now 4.37e-8 relative and IDENTICAL for both operands at every scale (1, 100, 10000) -- where it was 1.24e-7 for the box against 4.4e-8 for the cylinder while the two were built differently. Both sides agreeing exactly is the signal that they are now built the same way."
      },
      {
        "type": "p",
        "text": "WHAT DID NOT HAPPEN, and it corrects this arc's own plan. The previous commit predicted that once the primitives moved, Tolerance's defaults -- sized to float at kDefaultAbsolute=1e-5, kDefaultRelative=1e-6 -- could finally be re-tightened. Measured: they cannot. Tightening to 1e-6/1e-7 fails 6 tests; to 1e-7/1e-8, 23. So something still needs the loose band, and it is not the B-rep's construction error, which is now 4.4e-8 with over twenty times that headroom. Reverted, and left as the open question rather than forced."
      },
      {
        "type": "p",
        "text": "Also unresolved: that residual 4.37e-8 is itself float-flavoured -- one diagnostic showed an arc parameter holding exactly float pi (3.1415927410125732), and 0.5*sin(float pi) is 4.37e-8 exactly. So at least one float source remains in the chain and is NOT yet located. The improvement is real and measured; the ceiling is not yet fully lifted."
      },
      {
        "type": "p",
        "text": "Test: ctest --test-dir build -> 2495/2495 (5 Vulkan-HW skipped)."
      }
    ]
  },
  {
    "slug": "the-analytic-b-rep-is-double-precision",
    "title": "The analytic B-rep is double precision",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "feat",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "The float coordinate ceiling, decided in principle in design-decisions.md and now executed for the B-rep. Positions, curves, surfaces, edge parameters and radii are double; the mesh and the renderer stay single precision",
    "sha": "62afe21",
    "content": [
      {
        "type": "p",
        "text": "The float coordinate ceiling, decided in principle in design-decisions.md and now executed for the B-rep. Positions, curves, surfaces, edge parameters and radii are double; the mesh and the renderer stay single precision, and toMesh is the boundary where the conversion happens."
      },
      {
        "type": "p",
        "text": "WHAT MADE IT ONE CHANGE RATHER THAN 400. The B-rep namespace named its vector through a single alias, `using nexus::render::Vec3;`. Pointing that alias at a new `Vec3d` migrated every stored point and every internal computation in AnalyticBRep, BRepBoolean and BRepSurfaceIntersect at once. Vec3d converts from render::Vec3 IMPLICITLY, because widening cannot lose anything -- which is why 46 of the 48 test files that use brep types needed no change beyond dropping a `using nexus::render::Vec3;` that shadowed the alias. Narrowing is `toFloat()` and explicit, so every place precision is given up is visible."
      },
      {
        "type": "p",
        "text": "THE PREDICATES GOT BETTER, not just compatible. RobustPredicates now takes the double vector types; the float ones widen into them, so every existing call is unchanged and exact. The implementation already converted to double on entry -- what changes is that it is no longer handed a value that was rounded to float first. The expansion arithmetic was always exact for arbitrary doubles; now it is given some."
      },
      {
        "type": "p",
        "text": "SERIALIZATION v4 writes positions, radii and edge parameters as double, and reads v1-v3 as float. The old test of that rule relabelled a CURRENT blob with an older version byte, which only worked while every version shared one payload layout -- across a width change it would be a v4 payload with a v1 header. Replaced with a genuine v3 blob produced by the v3 writer before the migration and committed as tests/kernel/fixtures/brep_v3_box.nxb, which cannot drift with the code. It decodes to the same solid the current writer produces, so the widening moved no geometry; it only stopped rounding it."
      },
      {
        "type": "p",
        "text": "ONE REAL REGRESSION, found and fixed. Body::transform narrowed the point through a float Mat4 -- so translating a cylinder by (0,0,0) perturbed its coordinates enough that it no longer compared coincident with an untranslated copy, and the identity boolean of two identical cylinders returned empty. The matrix's ENTRIES are single precision but the point must not be: promoted and multiplied in double."
      },
      {
        "type": "p",
        "text": "Two tests were fixture artifacts rather than failures: SegmentTriangleBeatsNaiveFloat's \"naive float32\" comparison had silently become naive DOUBLE (and therefore accurate, turning the assertion into a tautology) -- it is now explicitly render::Vec3; and the non-finite serialization probe poked a 4-byte Inf pattern at an offset that now holds a double."
      },
      {
        "type": "p",
        "text": "MEASURED. A coordinate needing more than float's 24-bit mantissa now survives a round trip exactly: 1.2345678901234567 reads back unchanged where float gives 1.2345678806304932. That is the ceiling lifting, and it is asserted."
      },
      {
        "type": "p",
        "text": "WHAT THIS DOES NOT YET BUY, stated because the number is easy to misread. End-to-end geometric accuracy is unchanged at ~6e-8 relative, because the PRIMITIVE BUILDERS still place their vertices with float trig -- a double vertex holding a float-accurate point is still float-accurate. Widening makeCylinder alone was tried and REVERTED: the cylinder improved (5.9e-8 -> 4.4e-8) and the box got WORSE (1.24e-7), because a double-built cylinder's seam vertices agree with a float-built box's less well than two float-built ones did. The primitives migrate together or not at all, and that is the next stage."
      },
      {
        "type": "p",
        "text": "Test: ctest --test-dir build -> 2495/2495 (5 Vulkan-HW skipped). API-freeze audit clean -- no header added, so the manifest is untouched."
      }
    ]
  },
  {
    "slug": "record-the-geometry-kernel-s-trade-offs-each-with-the-altern",
    "title": "Record the geometry kernel's trade-offs, each with the alternative and its price",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "docs",
      "core"
    ],
    "category": "Commit",
    "excerpt": "design-decisions.md covered the renderer's choices and nothing of the geometry kernel's. Ten are now recorded, and each names the alternative that was NOT taken and what the one that was actually costs -- with the measur",
    "sha": "a8afbfe",
    "content": [
      {
        "type": "p",
        "text": "design-decisions.md covered the renderer's choices and nothing of the geometry kernel's. Ten are now recorded, and each names the alternative that was NOT taken and what the one that was actually costs -- with the measured price where a real defect traces back to it, because a trade-off with a receipt is worth more than one described in the abstract."
      },
      {
        "type": "p",
        "text": "The entries: exact topological decisions with floating-point constructions (and why exact geometry throughout is not an option -- degree explosion); float coordinates (below); watertight-or-empty as a hard contract; two geometry worlds with converters; the manifold-only half-edge; the separate analytic mass-properties path; Surface::normal meaning two things; fan triangulation; single-threaded by choice; and hand-picked tests plus one fuzzer."
      },
      {
        "type": "p",
        "text": "Several carry a price that was actually paid in this arc and is now written down: -ffast-math silently disabling the exact half of the first decision; the overloaded normal/axis field hiding a reversed-face bug because the tessellator's two errors cancelled; the fan assumption breaking the moment an arc bite made a face concave, three times over."
      },
      {
        "type": "p",
        "text": "FLOAT COORDINATES -- the open one, now decided in principle and sized. The cheap mitigation was measured before being rejected rather than after: computing constructions in double and rounding once, against a long-double reference over 200,000 circle evaluations, buys 1.2x at unit scale, 1.4x at 100, 1.6x at 10,000. Under 2x, because rounding the result to float is the floor. The ceiling is the STORAGE, not the arithmetic, so that mitigation is not worth shipping and was not shipped."
      },
      {
        "type": "p",
        "text": "The real migration is sized instead of hand-waved: ~400 Vec3 uses across five B-rep sources plus 36 in the public header; exactly ONE kernel source outside those files uses brep:: types (48 test files do, and most of their float literals convert implicitly); toMesh is already the render boundary so the float conversion happens in one place that exists; and serialization is already versioned at v3 with a documented read-earlier-versions rule, so a v4 writing doubles is the established pattern rather than a new one. Staged: scalar alias and double vector -> Surface and Curve -> Vertex -> serialization v4 -> re-tighten Tolerance's defaults, which are sized to float and are the visible symptom of the whole decision."
      },
      {
        "type": "p",
        "text": "Status recorded honestly as decided-in-principle, not executed: it is a multi-session mechanical migration and doing it hurriedly risks a subtly-wrong precision change, which is the class of bug that hides longest."
      },
      {
        "type": "p",
        "text": "No code changes. ctest unchanged at 2493/2493."
      }
    ]
  },
  {
    "slug": "step-1-done-the-tomesh-crack-was-overlap-and-the-degenerate",
    "title": "Step 1 done \u2014 the toMesh \"crack\" was overlap, and the degenerate triangles are load-bearing",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "docs",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "Root-caused, and all three candidates the scope listed were wrong.",
    "sha": "8d562e7",
    "content": [
      {
        "type": "p",
        "text": "Root-caused, and all three candidates the scope listed were wrong."
      },
      {
        "type": "p",
        "text": "Each was tested and disproven: the (u,v) polygons are simple (zero self-intersections on every cylindrical face); the ear-clipper does not stall (instrumented, none); and there is no missing triangle at all -- counting mesh edges by index gives ZERO used once and FOUR used more than twice. It was never a hole. It was overlap."
      },
      {
        "type": "p",
        "text": "Counting the same thing on the committed build settles the attribution: SIX over-used edges, against four with the (u,v) change. The defect is pre-existing and the change reduced it."
      },
      {
        "type": "p",
        "text": "The over-used edges are on the box's PLANAR faces and the triangles responsible have area exactly 0.000000 -- e.g. (0,3,46) and (0,46,3), the same three collinear points wound both ways. They come from fanning a face whose boundary carries collinear refined points: refining a straight edge puts intermediate points along it, and a fan from ring[0] connects consecutive points of that same edge."
      },
      {
        "type": "p",
        "text": "The mechanism behind the symptom is worth keeping: a zero-area triangle has no defined orientation, because its geometric normal is the zero vector and emitTri's dot(g, nrm) test is then comparing against nothing. Its winding is stable only by accident. Changing how a face is triangulated changes that accident, and a directed-edge analysis reports a closed body as having a boundary. The (u,v) change did not open the mesh -- it disturbed the arbitrary winding of triangles that were already wrong."
      },
      {
        "type": "p",
        "text": "THE REAL FINDING, and it reorders the work. The obvious repair -- drop degenerate triangles, since they contribute no surface -- was implemented and reverted: it takes over-used edges from six to zero and then opens 57 ONE-SIDED edges, boundaryLoops going 0 -> 18 on a cylinder and 0 -> 746 on a sphere at subdivisions 16. Those triangles are not litter. toMesh's watertightness currently DEPENDS on them; they are stitching something, and removing them exposes what."
      },
      {
        "type": "p",
        "text": "So interior sampling cannot be built yet. Every step of the planned work changes exactly the connectivity these triangles are compensating for -- which is what the reverted attempt demonstrated in miniature. The scope now says: do not proceed until a cylinder tessellates watertight WITHOUT any zero-area triangle, and gives the procedure for finding what they stitch (one primitive at subdivisions 1, per-face triangle listing, boundary-edge coverage checked face by face)."
      },
      {
        "type": "p",
        "text": "No code shipped. ctest unchanged at 2493/2493."
      }
    ]
  },
  {
    "slug": "scope-tomesh-s-curved-patch-tessellation-with-the-crack-cons",
    "title": "Scope toMesh's curved-patch tessellation, with the crack constraint designed in",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "docs",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "A design note, not an implementation. It exists because the obvious fix was tried, reverted, and taught something that changes the design.",
    "sha": "6533d0f",
    "content": [
      {
        "type": "p",
        "text": "A design note, not an implementation. It exists because the obvious fix was tried, reverted, and taught something that changes the design."
      },
      {
        "type": "p",
        "text": "THE CONSTRAINT, stated first because it is the whole difficulty: a body's mesh must be watertight, so two faces sharing an edge must tessellate it identically. Interior points are free; boundary points are frozen. That makes this a constrained triangulation rather than a meshing convenience."
      },
      {
        "type": "p",
        "text": "THE PROPERTY THAT MAKES IT TRACTABLE: buildRing computes a face's boundary from the loop's coedges and each edge's own curve, without consulting how the face will be triangulated. So a face triangulated by the new method and its neighbour triangulated by the old one still meet exactly. The work can therefore roll out per surface kind, per face, behind a fallback, with no flag day -- any face the new path declines is handled the way it is today and the body stays watertight."
      },
      {
        "type": "p",
        "text": "IT SPLITS IN TWO, and the split is what makes most of it cheap. The measured deficit is not missing interior points, it is LONG DIAGONALS: a fan connects boundary points across the patch and in 3D that chord cuts inside the surface. For a developable surface -- cylinder, cone -- connecting the SAME points in the ruled direction already converges second-order (deficit 8.06e-2 at 16 rim points, 2.79e-4 at 272) with no interior samples at all. Tier 1 is therefore free: same vertices, same triangle count, different connectivity, and it fixes the measured cylinder defect on its own. Tier 2 -- interior Steiner points, gated on a sagitta test -- is only needed for doubly-curved and large patches."
      },
      {
        "type": "p",
        "text": "WHY DELAUNAY AND NOT AN EAR-CLIP. The reverted attempt used an ear-clip in (u,v). It helped (cylinder slivers 64->16 at subdivisions 4, 576->496 at 16, same triangle count, still watertight) but did NOT move the volume, because an ear-clip takes whatever ear it finds and is not obliged to avoid the long connection. The empty-circumcircle property is exactly what forbids it, and ConstrainedDelaunay2D -- rebuilt and hardened in inc66 -- already provides it with explicit constraint edges. That is reuse, not new machinery."
      },
      {
        "type": "p",
        "text": "WHAT IS NOT KNOWN, recorded as step 1 rather than glossed: the reverted attempt also broke watertightness on a boolean-result body at subdivisions 4, and that crack is NOT root-caused. Three candidates are listed. The note says explicitly not to build on top of it."
      },
      {
        "type": "p",
        "text": "Also scoped: the parameterisation still owed (surfaceUV inverts Plane and Cylinder only; Cone and Sphere needed, both with a degenerate apex/pole that must be handled or explicitly declined), a per-face fallback ladder whose last rung is an assertion that the triangulation uses each boundary edge exactly once -- the crack condition stated locally, so a whole-body symptom becomes a per-face diagnosis -- the cost to watch (classifyPoint calls toMesh(6) on every query), and the verification oracles this arc has already calibrated: convergence rather than a single value, the analytic mass-properties path as an independent oracle, watertightness at every level, and UNSIGNED area, since signed volume cancels duplicate triangles and three defects in this arc hid behind it."
      },
      {
        "type": "p",
        "text": "No code changes. ctest unchanged at 2493/2493."
      }
    ]
  },
  {
    "slug": "a-boolean-must-carry-its-operands-reversal-not-just-impose-i",
    "title": "A boolean must carry its operands' reversal, not just impose its own",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "The call-site audit I owed after the FaceDef::reversed fix. The static half came back clean -- every consumer of a face normal either honours Face::reversed or is explicitly gated to planar faces, and the consumers that ",
    "sha": "0fff130",
    "content": [
      {
        "type": "p",
        "text": "The call-site audit I owed after the FaceDef::reversed fix. The static half came back clean -- every consumer of a face normal either honours Face::reversed or is explicitly gated to planar faces, and the consumers that read the field as an AXIS are sign-robust. The empirical half did not, and found a hole in that very fix."
      },
      {
        "type": "p",
        "text": "addKept built each kept FaceDef's surface from the input face and left `reversed` at its default, so a boolean silently UN-REVERSED whatever its operands had already reversed. Nothing noticed while operands were only ever primitives, because a primitive has no reversed face. Feeding a difference back in shows it immediately: box(3) intersected with box(2)-minus-a-cylinder came back at 6.147149 -- exactly the volume the bore had before it could be marked reversed at all. The walls arrived reversed and left plain."
      },
      {
        "type": "p",
        "text": "The rule is a composition, not an assignment: carry the input's flag, and for a curved surface TOGGLE it when the operation reverses the face. Planar faces keep expressing reversal by a negated normal and compose correctly on their own -- negating an already-reversed plane's normal while carrying its flag yields the opposite outward direction, which is what reversing means -- so that path stays untouched, again."
      },
      {
        "type": "p",
        "text": "Measured, chaining a bored body as the TOOL: box3 n (box2 - cyl)   6.147149 -> 6.652851   (the bored body itself; box3 contains it) box3 - (box2 - cyl)  20.852852 -> 20.347149  (its complement in box3) both closed, both validators clean, and every cylindrical face that comes through still carries the cylinder's own axis with reversed set -- asserted directly, since the volume alone would pass if axis and flag were flipped together."
      },
      {
        "type": "p",
        "text": "Load-bearing: reverting the propagation fails ABooleanResultCanBeUsedAsAnOperandAgain and nothing else."
      },
      {
        "type": "p",
        "text": "CHARACTERIZED, NOT FIXED: the other direction. A bored body as the LEFT operand of a second bore returns empty for all three ops -- a refusal, so watertight-or-empty holds, not a wrong answer. Ruled out already: the same second cut works on a plain box (19 faces), and imprintMutually(bored, cyl2) SUCCEEDS with both operands valid and closed. So the imprint is not the blocker; it is downstream, in classification or the sew, on an operand whose faces are already bitten and concave. Pinned by a test that fails when it starts working."
      },
      {
        "type": "p",
        "text": "Test: ctest --test-dir build -> 2493/2493 (5 Vulkan-HW skipped)."
      }
    ]
  },
  {
    "slug": "a-reversed-curved-face-can-now-say-so-facedef-reversed",
    "title": "A reversed CURVED face can now say so \u2014 FaceDef::reversed",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "A boolean difference through a cylinder reported the wrong analytic volume: 6.147 where the truth is 6.653. The cause is one field meaning two things.",
    "sha": "80ca43b",
    "content": [
      {
        "type": "p",
        "text": "A boolean difference through a cylinder reported the wrong analytic volume: 6.147 where the truth is 6.653. The cause is one field meaning two things."
      },
      {
        "type": "p",
        "text": "Surface::normal is the outward normal for a Plane and the AXIS for a Cylinder, Sphere or Cone -- the header has always said so. booleanToBody reversed a kept face (the cavity wall of a difference, whose material lies on the far side) by negating that field. For a plane that states exactly what is meant. For a cylinder it does not reverse the face at all: it re-parameterizes the surface, leaving a bore whose stored axis points the wrong way and whose orientation flag is still false. Measured on box(2,2,2) minus an offset cylinder(r=0.5,16): all twelve cylindrical faces of the difference carried axis -Z with Face::reversed unset, against the intersection's twelve carrying +Z correctly."
      },
      {
        "type": "p",
        "text": "WHY IT SURVIVED. The tessellator derives a face's normal as (surface axis, negated if Face::reversed), so a flipped axis with the flag unset and the true axis with the flag set produce the SAME normal -- the two errors cancel there exactly, and every volume measured from toMesh came out right. The analytic mass-properties integrator does not cancel them: it needs the axis for the parameter frame AND the flag for the orientation, and gets one of them wrong. That is also why this went unnoticed until inclusion-exclusion was measured on the analytic volume rather than on a tessellation."
      },
      {
        "type": "p",
        "text": "Body::FaceDef could not express the correct thing at all -- it has no reversed flag -- so the boolean had no way to say what it meant even in principle."
      },
      {
        "type": "p",
        "text": "- FaceDef gains `bool reversed` (appended last, so source-compatible; no new header, so the API-freeze manifest is untouched -- the same shape as the innerLoops addition). - fromFaces copies it onto Face::reversed. - addKept sets it for non-planar surfaces and LEAVES THE PLANAR NEGATION EXACTLY AS IT WAS. That scoping is deliberate: the planar path is what every planar boolean in this kernel rests on, it was already correct, and fromFaces is the routine every primitive and every boolean is built through."
      },
      {
        "type": "p",
        "text": "RESULTS. (A-B) + (A n B) = A is now exact on the ANALYTIC volume at every offset (2e-7, against errors of 0.5, 2.4 and 2.75 before). |A u B| + |A n B| = |A| + |B| stays exact. Planar differences are bit-unchanged -- box minus box, and hollowBox, both still exact -- and so is every tessellated volume, as predicted by the cancellation above."
      },
      {
        "type": "p",
        "text": "The new test asserts the mechanism as well as the number: the bore's faces must keep the cylinder's own axis and report themselves reversed, since the volume alone would also pass if both were flipped together. Load-bearing: restoring the unconditional negation fails it and nothing else."
      },
      {
        "type": "p",
        "text": "STILL OPEN, unchanged by this and now the only analytic-volume gap left: the CENTRED cylinder case (dx = 0) misses both identities by 2.75e-2, because its holed faces force the whole body onto the tessellated fallback and toMesh under-refines the interior of a curved patch. That is the toMesh defect recorded in the previous commit, not this one."
      },
      {
        "type": "p",
        "text": "Scope beyond mass properties remains unestablished: anything else that read surface.normal on such a face was reading a flipped axis, and those call sites have not been audited."
      },
      {
        "type": "p",
        "text": "Test: ctest --test-dir build -> 2491/2491 (5 Vulkan-HW skipped). API-freeze audit and the B-rep serialization round trip both clean."
      }
    ]
  },
  {
    "slug": "chapters-35-36-the-flag-that-dissolved-the-bedrock-and-the-t",
    "title": "Chapters 35-36 \u2014 the flag that dissolved the bedrock, and the twice-shared seam",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "The logbook had fallen two chapters behind the code. Both are written now, and both carry a correction rather than only a result, because that is what the work actually produced.",
    "sha": "2fc9f1b",
    "content": [
      {
        "type": "p",
        "text": "The logbook had fallen two chapters behind the code. Both are written now, and both carry a correction rather than only a result, because that is what the work actually produced."
      },
      {
        "type": "p",
        "text": "Chapter 35 is not about geometry: the predicates rebuilt in chapter 20 were correct and the build had stopped running them, because -ffast-math is licensed to reassociate and an error-free transformation is algebraically zero. Six wrong signs on exactly-coplanar input, where the predicate answered with a confident +/-512 instead of the tie that Simulation of Simplicity exists to break. The part worth keeping is why no test saw it: the exactness battery bounds coordinates so its own reference stays exact in 64-bit integers, which puts the determinant below the 2^53 a double holds -- so the bound chosen to make the reference trustworthy is the bound that made the failure invisible."
      },
      {
        "type": "p",
        "text": "Chapter 36 covers the offset cylinder: the same-edge bite, the plane parallel to the axis, the concave face judged by an outline that no longer describes it, the fan that double-covered a lens, and finally the two operands discretizing one seam differently -- chapter 30's eight-against-sixteen, one layer out. It also corrects this book's own account of the residual: measured on the tessellation, inclusion-exclusion misses by seven thousandths, and chapter 36's first draft blamed the union. It was the tessellator under-refining curved patch interiors, and the union had been right all along."
      },
      {
        "type": "p",
        "text": "Two rules earned their place and are stated as such: an oracle that shares its subject's weaknesses proves nothing, and a change to how a face is bounded must be checked by AREA, since every other invariant this kernel owns will certify a geometrically wrong face."
      },
      {
        "type": "p",
        "text": "Re-rendered: 4 parts, 36 chapters."
      }
    ]
  },
  {
    "slug": "honour-imprintcurve-s-kinvalid-contract-stop-the-ear-clipper",
    "title": "Honour imprintCurve's kInvalid contract; stop the ear-clipper dropping its remnant",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "Three corrections to the seam work, prompted by going back over it rather than moving on.",
    "sha": "fe2d4db",
    "content": [
      {
        "type": "p",
        "text": "Three corrections to the seam work, prompted by going back over it rather than moving on."
      },
      {
        "type": "p",
        "text": "1. imprintCurve MODIFIED THE BODY AND REPORTED kInvalid. The reconcile path added in the previous commit subdivides a seam to match the other operand without splitting any face, and then returned kInvalid -- which is precisely the value the mutual imprint's fixpoint reads as \"nothing changed\", and which an existing test (CoordinatedHoleDefersWithoutA- PartnerRing) asserts means the body was untouched. That test passed only because it exercises a different branch. So the fixpoint could terminate with reconciliation still outstanding, having told its caller nothing had happened. subdivideArcAt now returns how many splits it made and the reconcile path returns the face when it did work. It still converges, because splitting at a point that is already a vertex is a no-op, so the next call returns zero. Load-bearing: reverting the return fails ReconcilingASeamReportsItAnd- ThenSettles."
      },
      {
        "type": "p",
        "text": "2. THE EAR-CLIPPER DROPPED ITS REMNANT. It gives up when it can find no ear, and then emitted the leftover only if exactly three vertices remained -- otherwise nothing, silently leaving a HOLE in a shell that is supposed to be closed. classifyPoint casts its parity ray against that tessellation, so a hole flips inside/outside for everything behind it. Phase 5 routed every concave face into this code, materially increasing exposure. It now fans whatever remains."
      },
      {
        "type": "p",
        "text": "HONEST STATUS: this is hardening, not a fix for an observed failure. I could not construct an input that stalls the clipper, and the whole suite passes with the old drop-the-remnant code, so the path is not currently reachable. What justifies shipping it is that where the clipper succeeds the output is BIT-IDENTICAL (three vertices left -> the same single triangle), so this changes nothing on any reachable path and is correct if one appears. EveryClosedBodyTessellatesToAClosedMesh is a regression guard for the class -- every closed body in the arc-bite battery, at three refinement levels -- not a demonstration of a current bug."
      },
      {
        "type": "p",
        "text": "3. A COMMENT ASSERTED A CAUSE I HAD REASONED TO, NOT MEASURED. The previous commit characterized a ~0.0069 inclusion-exclusion residual as \"the union's account of the cylinder's protruding part\". That was wrong. Measured on the ANALYTIC volume instead of a tessellation, |A u B| + |A n B| = |A| + |B| is EXACT at every offset. The residual was toMesh under-refining the interior of a curved patch (a lone cylinder converges to 3.088 against pi*r^2*h = 3.1416; the flat caps refine exactly, the side patches do not), and the two sides of the identity carry different amounts of curved surface so it does not cancel. The union was correct all along. Replaced with the analytic assertion, and the lesson written down: when an oracle and its subject share a known-approximate path, the oracle proves nothing about the subject."
      },
      {
        "type": "p",
        "text": "CHARACTERIZED, NOT FIXED -- a separate PRE-EXISTING defect that measurement uncovered: massProperties returns a wrong volume for a boolean DIFFERENCE through a curved solid (measured 6.147 where the truth is 6.653). Planar differences are exact -- box minus box, and hollowBox -- and so is the intersection, which keeps the tool's faces un-reversed. Only the reversed CURVED faces are wrong, and the cause is located: Surface::normal means the outward normal for a Plane but the AXIS for a cylinder, sphere or cone (the header says so), and booleanToBody reverses a kept face by negating that field. For a plane that flips the outward direction correctly; for a cylinder it flips the axis, re-parameterizing the surface without reversing the face at all. Body::FaceDef has no `reversed` flag, so the boolean has no way to express what it means -- the curved integrator does honour Face::reversed, it is simply never told. Scope beyond mass properties is not established: anything reading surface.normal on such a face is reading a flipped axis. Pinned by a bounded test that fails when it is fixed."
      },
      {
        "type": "p",
        "text": "Test: ctest --test-dir build -> 2490/2490 (5 Vulkan-HW skipped), no regressions."
      }
    ]
  },
  {
    "slug": "phase-6-curved-boolean-the-shared-vertical-seam-offset-cylin",
    "title": "Phase 6 curved boolean \u2014 the shared vertical seam; offset cylinder sews",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "4 min",
    "tags": [
      "feat",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "The offset cylinder-through-box boolean now produces closed, valid solids for all three ops where it returned empty. Two defects, and the first one is the interesting one because the previous handoff blamed the wrong thi",
    "sha": "d0637b9",
    "content": [
      {
        "type": "p",
        "text": "The offset cylinder-through-box boolean now produces closed, valid solids for all three ops where it returned empty. Two defects, and the first one is the interesting one because the previous handoff blamed the wrong thing twice."
      },
      {
        "type": "p",
        "text": "ROOT CAUSE OF THE SAME-RIM PAIRING. The flat faces the last attempt produced were not caused by the generatrix imprint at all. The circle imprint had no guard against a circle the face's boundary ALREADY lies on. A cylinder side face spanning two latitudes has its own rim on the latitude circle, and that circle meets each of the face's uprights at the upright's ENDPOINT -- which Phase 4d taught the crossing solver to accept, correctly, because that is how a neighbour's cut is recognised. Two endpoint crossings then look exactly like a clean two-point arc bite, and the face is \"cut\" from one end of its own rim to the other, giving a zero-area lune bounded by the rim and a second copy of it."
      },
      {
        "type": "p",
        "text": "What had been preventing that was luck: the two rim corners were ADJACENT in the loop and cutFaceBetween refuses adjacent vertices. The generatrix imprint drops a vertex between them, the accident stops protecting it, and four flat faces appear. Measured that way round -- 4 flat cuts with the generatrix imprint enabled, 0 with it disabled -- so the generatrix only EXPOSED a hazard the circle path already had. The guard that belongs there was written in Phase 4e but placed inside the fully-interior branch, after the arc-bite paths; hoisting it ahead of every circle path is the fix. Nothing downstream could have caught this: the corrupt body passes checkIntegrity, checkGeometry, isClosed and euler, because a degenerate face is topologically ordinary."
      },
      {
        "type": "p",
        "text": "THE SEAM ITSELF. A cylindrical side face is bounded by two rim ARCS and two uprights, and the generatrix runs parallel to the uprights, so its only possible crossings are on the arcs -- and the Line-imprint path tested only boundary edges whose curve is a Line. It found nothing and refused, so the box's wall was cut along the two generatrices while the cylinder kept its facet boundaries. Added an arc-crossing branch that solves the line against the arc's PLANE, confirms the hit is on the circle, and reads off its parameter -- the same \"solve on the parameter the geometry provides\" move as the Phase 4d latitude fix, and transversal where a distance equation would be tangential. Strictly inside the arc's span, with no slack, because an endpoint crossing is already the whole-loop vertex case."
      },
      {
        "type": "p",
        "text": "DISCRETIZATION. With both operands cut, they still disagreed on HOW FINELY. Cutting a box face along the seam circle gives the box ONE arc from entry to exit; the cylinder's rim over the same stretch is a chain of facet arcs. Measured at the z=-1 seam: 2 vertices on the box against 13 on the cylinder, 1 edge facing 12, and not one able to partner -- the identical failure the latitude ring had at 8-against-16. Fixed the same way: the bite subdivides its arc at the other operand's vertices, working in PARAMETERS rather than fractions (a fraction goes stale the moment the edge is split) and splitting the far end first so the remaining targets stay inside the retained edge. And because the mutual imprint cuts one operand at a time, a face already segmented along the circle now RECONCILES its discretization on a later round instead of merely refusing -- on the round that made the cut there was nothing yet to match, the same ordering trap as Phase 4a."
      },
      {
        "type": "p",
        "text": "RESULTS on box(2,2,2) against cylinder(r=0.5,h=4,16) offset along +X: - dx = 0.7, 1.0, 1.3: all three ops closed, both validators clean, 0 boundary edges. - (A-B) + (A\u2229B) = A EXACTLY at every offset and every refinement level. - dx = 1.0 (crossings at \u00b190\u00b0, which a 16-gon has vertices at) is exact throughout, inclusion-exclusion included, with the intersection matching the chord arithmetic to 0.765367. - The seam vertex sets are now identical operand to operand, 13 points at each z. - Centred cylinder unchanged: 40/18/22 faces, still exact."
      },
      {
        "type": "p",
        "text": "CHARACTERIZED, NOT FIXED: where the seam's endpoints do not land on facet vertices (dx = 0.7 and 1.3, crossing at \u00b153.13\u00b0 between the 16-gon's 22.5\u00b0 steps), inclusion- exclusion is off by ~0.0069 on a total of ~11.06. Ruled out by measurement: the seam vertex sets match, every offered face is consumed (43 offered, 43 in the union), the sew reports no reused directed edge, and D+I tiles the box exactly -- so the error is outside the box, in the union's account of the cylinder's protruding part, not in the seam's division of the interior. Pinned by a bounded test that fails when it is fixed."
      },
      {
        "type": "p",
        "text": "Also still empty, unchanged and correct under watertight-or-empty: the TANGENT configurations (dx = 0.5 with r = 0.5, and the chapter-9 baseline's r = 1 at dx = 0.5, which grazes the \u00b1Y walls exactly)."
      },
      {
        "type": "p",
        "text": "Test: ctest --test-dir build -> 2487/2487 (5 Vulkan-HW skipped), no regressions. test_BRepArcBiteSeam.cpp now 13 cases."
      }
    ]
  },
  {
    "slug": "correct-the-curved-boolean-handoff-the-vertical-seam-is-not",
    "title": "Correct the curved-boolean handoff \u2014 the vertical seam is not a coordination problem",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "2 min",
    "tags": [
      "docs",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "The Phase 5 handoff said the next step was to make the TwoLines imprint coordinate its vertices across both operands, the way the shared seam ring does for a circle. That was wrong, and the attempt that disproved it is w",
    "sha": "1849720",
    "content": [
      {
        "type": "p",
        "text": "The Phase 5 handoff said the next step was to make the TwoLines imprint coordinate its vertices across both operands, the way the shared seam ring does for a circle. That was wrong, and the attempt that disproved it is worth recording rather than repeating."
      },
      {
        "type": "p",
        "text": "Coordination is not involved. A cylindrical side face is bounded by two rim ARCS and two uprights, and the generatrix to be imprinted is PARALLEL to the uprights \u2014 so its only possible crossings are on the arcs, and the Line-imprint path tests only boundary edges whose curve is a Line. It therefore finds no crossings and refuses. Once the cylinder IS cut, the crossings land at (1, \u00b10.4, \u00b11) by construction, which is already exactly where the box's seam vertices are, so the weld pairs them with no protocol at all."
      },
      {
        "type": "p",
        "text": "Implemented and REVERTED: teaching the Line path to cross an arc (intersect the line with the arc's plane, confirm the hit is on the circle, read off its parameter \u2014 the same \"solve on the parameter the geometry provides\" move as the Phase 4d latitude fix). It does cut the cylinder: measured, 0 -> 12 vertices on the seam plane including all four at (1, \u00b10.4, \u00b11), both operands still valid and closed. It also produced FOUR ZERO-AREA faces, each with every vertex on one rim, joining a point on the +0.4 generatrix straight across to one on the -0.4 generatrix \u2014 some face is cut between two crossings on the SAME rim instead of one per rim."
      },
      {
        "type": "p",
        "text": "The part worth keeping: checkIntegrity, checkGeometry, isClosed and euler ALL pass on that corrupt body. None of them measures area. The only symptoms were two box faces flipping to OnBoundary and two reused directed edges in the offered set. This is the second time in this arc that a face-level geometric corruption slipped past every topological invariant \u2014 the first was the concave fan in Phase 5 \u2014 so the lesson is now recorded twice: for anything that changes how a face is bounded, assert AREA."
      },
      {
        "type": "p",
        "text": "Next attempt needs the arc crossing plus a guard that a generatrix's two crossings lie on OPPOSITE rims, and an area assertion on the imprinted cylinder."
      },
      {
        "type": "p",
        "text": "No behaviour change; the reverted code is not in the tree. ctest 2483/2483."
      }
    ]
  },
  {
    "slug": "phase-5-curved-boolean-the-offset-cylinder-s-arc-bite-seam",
    "title": "Phase 5 curved boolean \u2014 the offset cylinder's arc-bite seam",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "4 min",
    "tags": [
      "feat",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "Phase 4e closed the CENTRED cylinder-through-box, where each seam is a full circle interior to a box face. Push the cylinder sideways until its footprint reaches a side wall and the seam becomes an ARC BITE -- a circle e",
    "sha": "a73fa98",
    "content": [
      {
        "type": "p",
        "text": "Phase 4e closed the CENTRED cylinder-through-box, where each seam is a full circle interior to a box face. Push the cylinder sideways until its footprint reaches a side wall and the seam becomes an ARC BITE -- a circle entering and leaving through the face's boundary, cutting a lens off it -- and every such boolean returned empty. Four separate defects were behind it. All four are fixed; the boolean still bails, and the fifth cause is located and named below."
      },
      {
        "type": "p",
        "text": "(1) THE BITE WAS DEFERRED, and the reason is the interesting part. Both crossings land on the SAME boundary edge: measured on box(2,2,2) against cylinder(r=0.5), the circle meets the +X edge at y = +/-0.4 and nowhere else, for every offset. So the natural topology is a two-sided face -- the arc plus the chord it cuts -- and checkIntegrity requires three coedges per loop. Weakening that rule was not the answer. Splitting the chord at its MIDPOINT is: the bite then has three edges, the two crossings stop being adjacent in the loop (separately what cutFaceBetween demands), and the extra vertex sits exactly on the original straight boundary, so it costs a redundant vertex and no geometric error. mergeCollinearEdges removes it if a caller wants the minimal body. Measured: box 6 faces/0 arcs -> 8 faces, both validators clean, still closed."
      },
      {
        "type": "p",
        "text": "(2) THE BOX'S SIDE WALL WAS NEVER CUT. intersectSurfaces returned Unsupported for a plane PARALLEL to the cylinder's axis. That section is not a conic at all -- the plane slices the cylinder along two straight generatrices -- and TwoLines already existed in the enum for exactly this. Implemented in planeCylinder: two lines when the plane is nearer the axis than the radius, one when tangent, None when it misses; a SKEW plane cuts an ellipse and stays Unsupported. The +X wall is now cut at y = +/-0.4."
      },
      {
        "type": "p",
        "text": "(3) THE REMAINDER FACE WAS CLASSIFIED INSIDE THE CYLINDER. An arc bite leaves a CONCAVE face, and faceSamplePoint assumed a face without holes has its outline average on it -- true for convex, false here. Worse, the polygon it tested was built from bare vertices, which replaces the arc with its chord and so encloses the very lens that was removed. So the material test now REFINES curved boundary edges, and the no-holes shortcut applies only when the centroid actually passes it. Measured: the remainder's outline average is (0.333, 0), which is 0.367 from an axis of radius 0.5 -- inside it -- while the face's material is almost entirely outside. Box faces classified Inside: 5 -> 3 (the two lens bites plus the +X wall's middle strip, which is the truth); offered one-sided edges 38 -> 30."
      },
      {
        "type": "p",
        "text": "(4) toMesh FANNED CONCAVE FACES. A no-hole face was triangulated as a fan from its first vertex, correct only for a convex ring -- and that used to be guaranteed, since a Line imprint splits convex into convex and an interior circle takes the hole path. The arc bite breaks it. Measured on the bitten +Z face: it tessellated to area 4.65 where the whole face is 4.0, double-covering the 0.65 lens just cut from it. Signed volume survived that (duplicate triangles cancel), which is why the validators, euler and the volume all looked clean -- ONLY the unsigned area showed it, which is why that assertion is in the new test. It is not cosmetic: classifyPoint's parity ray runs against this tessellation, so a double-covered region flips inside/outside for anything behind it. Convexity is now tested and a concave ring goes to the ear-clipper the hole path already used. Collinear corners are ignored so the bite's own chord midpoint does not read as concavity. The test is PLANAR-ONLY: for a curved face `nrm` is the cylinder AXIS, not a normal, and projecting a side patch along its own axis degenerates the turns -- routing those to the ear-clipper broke the centred boolean outright, so non-planar faces keep the fan."
      },
      {
        "type": "p",
        "text": "New test_BRepArcBiteSeam.cpp (9 cases) pins each fix, plus a no-regression case for the centred cylinder (all three ops at their exact face counts) since fixes 3 and 4 sit on every boolean's path."
      },
      {
        "type": "p",
        "text": "STILL EMPTY, and the cause has moved to a shared-seam problem of the same family as Phase 4a. The offered union set has 30 one-sided edges and ZERO reused directed edges -- nothing non-manifold, pieces simply missing partners -- and the survivors name the place: the box's vertical seams at (1, +/-0.4, +/-1) against cylinder generatrix vertices like (1.054, 0.354, +/-1), which is a facet vertex at the cylinder's own radius rather than a point on x = 1. So the box's wall is cut along the generatrices while the CYLINDER's side faces keep their facet boundaries there: the two operands do not share the vertical seam, exactly as they once did not share the latitude ring. Next step is to make the TwoLines imprint coordinate its vertices across both operands, as imprintCurve's ringPoints already does for a circle. Characterized by a test that FAILS when that lands."
      },
      {
        "type": "p",
        "text": "Test: ctest --test-dir build -> 2483/2483 passed (5 Vulkan-HW skipped), no regressions."
      }
    ]
  },
  {
    "slug": "ieee-754-semantics-ffast-math-was-silently-de-exacting-the-e",
    "title": "IEEE-754 semantics -- -ffast-math was silently de-exacting the exact predicates",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "fix",
      "build"
    ],
    "category": "Commit",
    "excerpt": "The kernel's whole correctness story rests on RobustPredicates being exact. It was not. The build compiled with -march=native -ffast-math, and -ffast-math permits reassociation, which is the one thing Shewchuk's error-fr",
    "sha": "74bce16",
    "content": [
      {
        "type": "p",
        "text": "The kernel's whole correctness story rests on RobustPredicates being exact. It was not. The build compiled with -march=native -ffast-math, and -ffast-math permits reassociation, which is the one thing Shewchuk's error-free transformations cannot survive: twoSum's error term is the algebraically-zero expression (a - (s - bv)) + (b - bv), and a compiler entitled to delete it does. Measured, everything else held identical:"
      },
      {
        "type": "p",
        "text": "-O2 -march=native              twoSum lo = 8.67e-19   error term survives -O2 -march=native -ffast-math  twoSum lo = 0          FOLDED TO ZERO"
      },
      {
        "type": "p",
        "text": "With every error term zero the expansion arithmetic degenerates to plain double, and that is not enough. Against an exact __int128 reference over integer-valued float coordinates whose intermediates exceed 2^53:"
      },
      {
        "type": "p",
        "text": "with    -ffast-math   6 WRONG SIGNS in 5,675 cases without -ffast-math   0 wrong signs in 400,000 cases (537 exact degeneracies)"
      },
      {
        "type": "p",
        "text": "The failure mode is the worst available. All six were on EXACTLY COPLANAR input, where orient3D returned a confident -512, -128, +128, -1024, +16, +2048 instead of 0 -- so Simulation-of-Simplicity was never handed a tie to break, and every degeneracy strategy built on pointPlaneSideSoS / segmentCrossesTriangleSoS was deciding by coin flip. Two thirds of the degenerate cases in that sample came out wrong."
      },
      {
        "type": "p",
        "text": "Why no test caught it: test_RobustPredicatesExactness bounds coordinates so its own int64 reference stays exact -- orient3D coords <= 2^15, determinant <= 2^51. That ceiling is BELOW double's 53-bit mantissa, so plain double is exact there too. The bound chosen to make the reference exact is the same bound that made the subject's inexactness invisible. All eight pre-existing batteries still pass with -ffast-math re-added; verified directly."
      },
      {
        "type": "p",
        "text": "Fix: - nexus_gfx_core / nexus_app / nexus_runtime_viewer: drop -ffast-math, add -ffp-contract=off (an FMA moves where rounding lands, which an error-free transformation may not tolerate). MSVC gets /fp:precise /fp:contract=off. - Replace -march=native with a probed -march=x86-64-v2 baseline (root CMakeLists, NEXUS_ARCH_BASELINE). Host-specific ISA makes FMA/vectorisation differ per build machine, so the same source yields different FP results -- which contradicts this kernel's reproducibility contract. Determinism outranks the tuning."
      },
      {
        "type": "p",
        "text": "Tests that can actually see it (test_RobustPredicatesExactness, __int128 reference, guarded on __SIZEOF_INT128__ so the portable int64 batteries remain the floor): - Orient3DIsExactWhereADoubleCannotBe -- coords <= 2^21, triple products <= 2^66, every fourth point placed exactly on the others' plane then nudged. FAILS under -ffast-math (verified by temporarily re-adding the flag); this is the canary. - Orient2DIsExactWhereADoubleCannotBe, InSphereIsExactWhereADoubleCannotBe -- same idea. - MeasuredCoplanarFixtureThatFastMathGetsWrong -- the recorded quadruple from the run that exposed this, so the guard does not depend on a seeded draw finding it again."
      },
      {
        "type": "p",
        "text": "Two dead non-finite guards, same root cause: std::isfinite returns TRUE for NaN and Inf under -ffast-math, so Camera::lookAt(target, distance) accepted a NaN target straight into the view matrix and FluidSolver::setSmoothingRadius accepted a NaN h (the denominator of every SPH kernel weight). Both files already had a bit-inspecting isFiniteFloat and used it everywhere else -- these two were stragglers. Switched to the local helper, which is correct under either FP policy, and pinned by CameraExtended.LookAtWithDistanceRejects- NonFiniteInput + FluidSolver.SmoothingRadiusRejectsNonFiniteInput (both fail with the guard removed)."
      },
      {
        "type": "p",
        "text": "Docs corrected where they asserted the opposite -- CLAUDE.md and HANDOFF-CHARTER.md both said the flags were DISABLED and std::isfinite was reliable, which instructed new code to use a guard that did not work. Also corrected in CLAUDE.md: MeshBVH's \"parallel build\" (serial), the CAD \"parallel solver\" / parallelSolve (no such symbol; \"parallel\" meant the geometric constraint), the stale test count and the stale allowed-API-freeze-failure, plus an explicit note that the kernel is single-threaded so nobody adds ad-hoc threads."
      },
      {
        "type": "p",
        "text": "No behavioural regression and no measurable cost: ctest 2474/2474 (5 Vulkan-HW skips), 34.4s -> 34.8s wall."
      }
    ]
  },
  {
    "slug": "phase-4e-curved-boolean-an-imprint-segments-a-face-it-does-n",
    "title": "Phase 4e curved boolean \u2014 an imprint segments a face, it does not open it",
    "date": "2026-07-30",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "feat",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "A cylinder driven through a box now yields all three Booleans as closed analytic solids. Everything the sew needed had been in place since Phase 4d; the fault was upstream, in the imprint.",
    "sha": "14882a2",
    "content": [
      {
        "type": "p",
        "text": "A cylinder driven through a box now yields all three Booleans as closed analytic solids. Everything the sew needed had been in place since Phase 4d; the fault was upstream, in the imprint."
      },
      {
        "type": "p",
        "text": "Where a seam circle fell entirely inside a face, the imprint gave that face an inner loop and stopped. The ring's arcs had one coedge each, so the box came out of the imprint as an open shell with two circular openings, and two things follow."
      },
      {
        "type": "p",
        "text": "First, classification stops meaning anything. classifyPoint counts ray crossings of the tessellated shell, and parity is only informative for a closed one: a ray that enters through an opening and leaves through material crosses once and calls the point inside. Measured on box(2,2,2) against cylinder(r=0.5,h=4,16): five of the sixteen faces in the cylinder's lower stub, a half-unit BELOW a box ending at z=-1, came back Inside. The pristine box classifies those same five points Outside, which is how the mechanism was pinned rather than guessed."
      },
      {
        "type": "p",
        "text": "Second, and surviving a fix to the first: the disk inside the ring is the material that CAPS the intersection. Discarded at the imprint, box n cylinder can never be closed, because the two faces that close it exist nowhere."
      },
      {
        "type": "p",
        "text": "So a fully-interior circle now segments the face: the circle becomes an inner loop of the face it cut, the enclosed disk becomes a face of its own, and the two share the ring's arcs edge for edge. The shell stays closed and the volume is untouched. imprintCurve returns the new disk face, and refuses a circle that is already a ring of the face or is the face's own outer boundary -- the latter being the disk itself, which the driver re-offers the seam that created it."
      },
      {
        "type": "p",
        "text": "The ring's direction is READ OFF the face, not assumed. A plane cutting a cylinder yields one circle per level whose axis agrees with the normal of the face above and opposes the face below, so a hardcoded winding gets one of any two such rings backwards: an inner loop wound with its outer boundary bounds a second outer region rather than an opening. Whichever way the cut face's own outer loop turns about its normal is outer-like, the ring turns the other way, and the disk turns with the face. Hardcoding it instead fails 3 of the 6 new tests."
      },
      {
        "type": "p",
        "text": "Results on box(2,2,2) / cylinder(r=0.5,h=4,16), the cylinder's footprint strictly inside the box: union 40 faces, intersection 18, difference 22 -- exactly what the geometry dictates -- all closed, both validators clean, 0 boundary edges. Inclusion-exclusion holds at every refinement level, and unrefined the volumes are the exact 16-gon arithmetic: I=1.530734, D=6.469266, U=9.530734. The analytic circles survive: the plug is half the cylinder's length and tracks exactly half of the cylinder's own refinement series level for level, which is the only witness available since a chord shares its arc's endpoints."
      },
      {
        "type": "p",
        "text": "Still narrow, and unchanged: offset the cylinder until it pierces a side wall and the seam is an arc bite, which still bails (the chapter-9 baseline still passes unchanged); a circle onto a SPHERE's face is still refused, which box/sphere and sphere/sphere need. Separately found, pre-existing, not touched: toMesh under-refines a curved patch's interior, so a cylinder's volume converges to 3.088 rather than pi*r^2*h=3.1416 -- the caps refine exactly, the side patches do not."
      },
      {
        "type": "p",
        "text": "Three tests that characterised the old hole semantics are updated to the corrected ones (segmentation, closed, area- and volume-preserving); removing the disk fails 5 of the 6 new tests."
      },
      {
        "type": "p",
        "text": "Test: ctest --test-dir build  ->  2468/2468 passed (5 Vulkan-HW skipped). New: test_BRepCurvedBooleanSew.cpp (6 cases). Logbook: chapters 33-34 + re-rendered HTML edition."
      }
    ]
  },
  {
    "slug": "phase-4d-curved-boolean-accept-a-latitude-crossing-at-an-edg",
    "title": "Phase 4d curved boolean \u2014 accept a latitude crossing at an edge endpoint",
    "date": "2026-07-29",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "A cylinder driven through a box is crossed by two planes, so each of its side faces must be cut into three pieces. Each was being cut exactly once: measured on box(2,2,2) against cylinder(r=0.5,h=4,16 segments), the 16 s",
    "sha": "88a1ce5",
    "content": [
      {
        "type": "p",
        "text": "A cylinder driven through a box is crossed by two planes, so each of its side faces must be cut into three pieces. Each was being cut exactly once: measured on box(2,2,2) against cylinder(r=0.5,h=4,16 segments), the 16 side faces became 32 in four groups of eight \u2014 z\u2208[-2,-1], z\u2208[-2,+1], z\u2208[-1,+2], z\u2208[+1,+2] \u2014 so sixteen still straddled a plane, and a face that straddles is kept or dropped whole."
      },
      {
        "type": "p",
        "text": "Cause: once one face of the cylinder is cut at a latitude, its neighbour's upright edges are already split there, so for every remaining face the level meets each upright edge exactly AT an endpoint rather than inside it. The cylinder's crossing solver required a fraction strictly inside the edge, reported no crossings at all, and the face fell through to the interior-hole case, which refused it. The planar path had always accepted an endpoint fraction and snapped it onto the existing vertex; the cylinder path now does the same, so a crossing through an existing vertex reuses that vertex instead of being invisible."
      },
      {
        "type": "p",
        "text": "Accept a crossing within an axial-epsilon slack of either edge endpoint, then clamp the reported fraction into [0,1] so the caller's snap-to-vertex step turns it into a reuse of that vertex. The strict-interior guard is restored as a side effect for fully-internal crossings, and the new regression locks both extremes on box-intersect-cylinder."
      },
      {
        "type": "p",
        "text": "Also adds clangd / compile_commands.json plumbing so the IDE stops reporting the public headers as missing: CMAKE_EXPORT_COMPILE_COMMANDS=ON in the root CMakeLists.txt plus a .clangd fallback with the kernel include roots and the NEXUS_BACKEND_VULKAN/NEXUS_BACKEND_NULL defines. The -Werror gate is unchanged (clangd builds with -Wno-everything; the real compiler still runs -Werror)."
      },
      {
        "type": "p",
        "text": "Test: ctest --test-dir build  ->  2462/2462 passed (5 Vulkan-HW skipped). New: BRepLatitudeSplitCompleteness.SplitIntoThreeBandsAcrossBothPlanes and 4 sibling cases."
      }
    ]
  },
  {
    "slug": "phase-4c-curved-boolean-classify-a-face-by-its-material-not",
    "title": "Phase 4c curved boolean \u2014 classify a face by its material, not its outline",
    "date": "2026-07-29",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "fix",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "A face is classified against the other solid by testing one point, and that point was faceCentroid: the average of the outer boundary's vertices. On a box face pierced by a cylinder -- a square with a circular hole throu",
    "sha": "2bfe842",
    "content": [
      {
        "type": "p",
        "text": "A face is classified against the other solid by testing one point, and that point was faceCentroid: the average of the outer boundary's vertices. On a box face pierced by a cylinder -- a square with a circular hole through its middle -- that average is the centre of the square, which is the centre of the hole. The single point chosen to stand for the face was the one point the face does not occupy. It lies inside the cylinder, so the face was called Inside: dropped from the union, where its material is entirely outside the cylinder and belongs on the boundary, and kept for the intersection, where none of it belongs."
      },
      {
        "type": "p",
        "text": "Body::faceSamplePoint returns a point known to lie on the material instead -- inside the outer boundary and inside none of the holes -- and classifyFace samples that. selectFace's coincident-pair probe offsets from the same point and had the same flaw, so it moved over too."
      },
      {
        "type": "p",
        "text": "Candidate-and-test rather than closed form. Tried first is the midpoint between an outer vertex and a hole vertex, because that is the candidate which survives the case defeating every averaging scheme; then outer edge midpoints and vertices drawn a quarter, a half and three quarters toward the centroid. The first candidate that passes wins and the order is fixed, so the answer is reproducible -- a classification varying between runs would break determinism on the headless path. With no holes it returns the centroid unchanged, so nothing that existed before moves by a bit. A curved holed face falls back to the centroid, since the material test is planar."
      },
      {
        "type": "p",
        "text": "Why not weight the centroid by area: for a hole concentric with its face the area centroid is STILL the centre, because both regions share it. No formula that averages the face's extent can escape the hole, because the hole is where the middle is. That case is pinned in the tests so the reasoning cannot be quietly re-tried."
      },
      {
        "type": "p",
        "text": "Measured: on a box pierced by a 16-segment cylinder the holed faces' centroids sit on the axis and classify Inside; the sample points land off-axis and classify Outside. All six box faces now classify Outside, which is the truth."
      },
      {
        "type": "p",
        "text": "The boolean between curved solids still returns empty, and the cause moved rather than cleared. The union's face collection improved from 22 faces with no holes to 24 with two -- the pierced faces are now correctly kept and bring their openings -- but the assembly still refuses, with 5 directed edges traversed twice and 58 edges used once where a closed solid uses every one twice. A correct answer would hold 40 faces: the box's six, two cylinder stubs of sixteen side faces each, and two end caps. So the operands are still being divided too coarsely, and the cylinder's side faces in particular are cut into fewer pieces than the two planes crossing them should produce. That is Phase 4d, and the memory entry carries the numbers and the first three hypotheses to test."
      },
      {
        "type": "p",
        "text": "Verified: 2455 ran / 2450 pass / 5 hardware skips, zero regressions -- the risk that mattered, since classifyFace is on every boolean's path."
      }
    ]
  },
  {
    "slug": "phase-4b-curved-boolean-carry-face-inner-loops-through-the-s",
    "title": "Phase 4b curved boolean \u2014 carry face inner loops through the sew",
    "date": "2026-07-29",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "feat",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "Everything about a hole was already understood except how to build one back. checkIntegrity validates inner loops, toMesh subtracts them, serialization writes them, and imprintCurve has been creating them for several inc",
    "sha": "e59d33d",
    "content": [
      {
        "type": "p",
        "text": "Everything about a hole was already understood except how to build one back. checkIntegrity validates inner loops, toMesh subtracts them, serialization writes them, and imprintCurve has been creating them for several increments. What could not be done was reassemble one: faceVertices returns the outer boundary alone, FaceDef held a single ring, fromFaces built only outer loops, and BRepBoolean never mentioned innerLoops. A pierced face went in holed and came out solid, losing the opening and leaving the other operand's ring edges with nothing to partner against."
      },
      {
        "type": "p",
        "text": "Closed by adding Body::faceInnerLoopVertices as the companion to faceVertices, FaceDef::innerLoops, inner-ring construction in fromFaces, and carrying them across the weld in addKept -- where the same outward flip that reverses the outer loop now reverses each hole too, or a hole would wind with its boundary instead of against it and bound a second outer region rather than an opening."
      },
      {
        "type": "p",
        "text": "The one decision worth recording: a hole ring goes through EXACTLY the same construction as an outer one. The existing per-ring code was extracted into a buildRing lambda and inner rings use it unchanged -- edge dedup, coedge partnering, both non-manifold rejections. A hole differs from an outer boundary only in winding and in being listed as inner, so a separate inner-loop builder would have meant two implementations of edge sharing, diverging on the first bug fixed in one of them."
      },
      {
        "type": "p",
        "text": "The boolean still returns empty, and instrumenting the sew moved the cause somewhere that is no longer about seams at all. Union: 22 faces, ZERO with holes -- the holed face was dropped. Intersection: 18 faces, 2 holed, each hole a 16-vertex ring (the shared ring from Phase 4a arriving intact), then fromFaces rejecting the result as non-manifold. One cause for both: classifyFace tests a single point, faceCentroid, which averages the OUTER loop's vertices. For a square face with a circular hole through its middle that average is the square's centre, which is the hole's centre -- so the one point chosen to represent the face is the one point not on it. It lies inside the cylinder, so the face is called inside: dropped from the union, where its material is entirely outside the cylinder and belongs on the boundary, and kept for the intersection, where none of it belongs."
      },
      {
        "type": "p",
        "text": "Recorded for whoever fixes that: an area-weighted centroid does NOT help. For a hole concentric with its face the area centroid is still the centre, because both regions share it. No formula that averages the face's extent can escape the hole, because the hole is where the middle is. What is needed is a point known to lie on the material -- asking the face for a sample of itself rather than a summary of its outline. And faceCentroid is public and used elsewhere, so that wants a new faceSamplePoint rather than a change of meaning."
      },
      {
        "type": "p",
        "text": "Disabling the inner-loop construction fails 4 of the 5 new tests."
      },
      {
        "type": "p",
        "text": "Verified: 2450 ran / 2445 pass / 5 hardware skips, zero regressions -- which matters here because fromFaces is the routine every primitive and every boolean is built through."
      }
    ]
  },
  {
    "slug": "phase-4a-curved-boolean-share-the-seam-ring-between-operands",
    "title": "Phase 4a curved boolean \u2014 share the seam ring between operands",
    "date": "2026-07-29",
    "author": "The Kernel",
    "readTime": "3 min",
    "tags": [
      "feat",
      "geometry"
    ],
    "category": "Commit",
    "excerpt": "With both operands cut, the seam could be read from both sides and they did not match -- not in position, in NUMBER. Where a cylinder passes through a box face, the box's hole ring carried 8 vertices and the cylinder's l",
    "sha": "af917d0",
    "content": [
      {
        "type": "p",
        "text": "With both operands cut, the seam could be read from both sides and they did not match -- not in position, in NUMBER. Where a cylinder passes through a box face, the box's hole ring carried 8 vertices and the cylinder's latitude ring 16. The 8 sat on 8 of the 16 to within 1.7e-7, so they were beyond doubt the same circle, but each hole edge spanned two of the cylinder's, so no edge on either side could find a partner and an edge-pairing sew had nothing to pair."
      },
      {
        "type": "p",
        "text": "The 8 was a constant, chosen when a hole ring was something a face acquired on its own account. That is right for a lone body, where nothing else has an opinion, and wrong for a seam: a seam is owned by neither operand, and the only correct resolution is the one the other side already uses. imprintCurve therefore takes an optional list of the other operand's vertices on the seam circle and builds the ring on exactly those points. Points not on the circle are discarded, so the list is a hint and never a way to place a vertex off the curve; the parameter range is derived per point with the closing edge wrapping a full turn, so every edge remains a forward sweep that reproduces its own endpoints."
      },
      {
        "type": "p",
        "text": "That fix alone changed nothing. The rings still came out 8 against 16."
      },
      {
        "type": "p",
        "text": "The cylinder's latitude ring DOES NOT EXIST at the start -- it is created by imprinting the box onto the cylinder -- and the mutual imprint cuts the box first, so at that moment there is nothing at that height to match. The information needed to build the seam correctly is produced by the step that comes afterwards. Committing to a resolution there is not merely arbitrary but premature, and the honest response to a question that cannot yet be answered is to decline it: a coordinated hole now DEFERS when its partner ring is absent, and imprintMutually runs a second round to make the deferred cuts. It converges rather than accumulating because of the Phase 3 idempotence guard, doing work it was not written for. A lone body passes no ring, has no other side to agree with, and still gets the uniform ring unchanged."
      },
      {
        "type": "p",
        "text": "Both seams now carry 16 vertices on each side with a worst nearest-neighbour distance of exactly 0.00000000 -- one side's ring vertices ARE the other's positions rather than an independent construction that happens to agree. Reverting only the partner hand-off restores 8 against 16 and fails the headline assertion, so this is the mechanism and not a coincidence of the configuration."
      },
      {
        "type": "p",
        "text": "Curved booleans still return empty, and the remaining cause is now singular and exactly located: a face's inner loop does not survive the sew. faceVertices walks the outer loop alone, FaceDef holds a single ring, fromFaces builds only outer loops, and BRepBoolean never mentions innerLoops -- so the hole this change makes correct is discarded on the way out. That is Phase 4b."
      },
      {
        "type": "p",
        "text": "Verified: 2445 ran / 2440 pass / 5 hardware skips, zero regressions (including test_BRepInnerLoop, which exercises the untouched lone-body path)."
      }
    ]
  },
  {
    "slug": "reproducible-html-book-edition-renderer",
    "title": "Reproducible HTML book edition + renderer",
    "date": "2026-07-29",
    "author": "The Kernel",
    "readTime": "1 min",
    "tags": [
      "docs",
      "logbook"
    ],
    "category": "Commit",
    "excerpt": "The logbook's designed edition (warm paper / prussian ink, brass accents, book serif, Parts -> Chapters -> passages, reading-progress rule, light and dark) had been a hand-built artifact, so it fell behind the canonical ",
    "sha": "ac6a7bc",
    "content": [
      {
        "type": "p",
        "text": "The logbook's designed edition (warm paper / prussian ink, brass accents, book serif, Parts -> Chapters -> passages, reading-progress rule, light and dark) had been a hand-built artifact, so it fell behind the canonical Markdown as chapters were added and could not be refreshed as part of an increment."
      },
      {
        "type": "p",
        "text": "tools/render_logbook.py generates it from docs/kernel-logbook.md instead, making \"republish the book edition\" one deterministic command:"
      },
      {
        "type": "p",
        "text": "python3 tools/render_logbook.py           # -> docs/kernel-logbook.html python3 tools/render_logbook.py --check    # exit 1 when the output is stale"
      },
      {
        "type": "p",
        "text": "Stdlib only, deliberately: it must run in any checkout with no install step. The --check mode makes staleness detectable, so an automated loop can regenerate the edition per increment rather than letting it drift again."
      },
      {
        "type": "p",
        "text": "The rendered Contents is built from the actual headings rather than from the hand-written Contents list in the Markdown (which the renderer skips), so the navigation cannot drift from the chapters that exist. \"What was proven.\" paragraphs become the callout treatment and blockquotes the pull-quote treatment, matching how the convention says a passage is written."
      },
      {
        "type": "p",
        "text": "Output verified structurally: 4 parts, 29 chapters (including 27-29, the curved boolean arc), 11 proven callouts, 11 pull quotes, no leaked Markdown, and the body parses as well-formed XML. NOT visually verified -- headless screenshots do not produce output in this environment."
      },
      {
        "type": "p",
        "text": "This is a separate surface from the generic docs/html site, which is left untouched rather than regenerating all 56 of its pages for one addition."
      }
    ]
  }
];
