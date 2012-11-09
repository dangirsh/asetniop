// Generated by CoffeeScript 1.4.0
(function() {
  var Combos, KeyMap;

  KeyMap = {
    65: 1,
    81: 1,
    83: 2,
    87: 2,
    68: 4,
    69: 4,
    70: 8,
    82: 8,
    74: 16,
    85: 16,
    75: 32,
    73: 32,
    76: 64,
    79: 64,
    186: 128,
    80: 128,
    67: 256,
    86: 256,
    66: 256,
    78: 256,
    32: 512
  };

  Combos = {
    0: "",
    1: "a",
    2: "s",
    3: "w",
    4: "e",
    5: "x",
    6: "d",
    7: "we",
    8: "t",
    9: "f",
    10: "c",
    11: "ac",
    12: "r",
    13: "ar",
    14: "est",
    15: "wr",
    16: "n",
    17: "q",
    18: "j",
    19: "wn",
    20: "y",
    21: "ay",
    22: "nd",
    23: "and",
    24: "b",
    25: "ab",
    26: "nc",
    27: "can",
    28: "be",
    29: "ran",
    30: "best",
    31: "between",
    32: "i",
    33: "!",
    34: "z",
    35: "wi",
    36: ",",
    37: "xi",
    38: "di",
    39: "said",
    40: "v",
    41: "fi",
    42: "ci",
    43: "-",
    44: "ve",
    45: "five",
    46: "tried",
    47: "first",
    48: "h",
    49: "ha",
    50: "sh",
    51: "wh",
    52: "he",
    53: "-",
    54: "she",
    55: "when",
    56: "th",
    57: "that",
    58: "ch",
    59: "with",
    60: "the",
    61: "have",
    62: "these",
    63: "where",
    64: "o",
    65: "(",
    66: ".",
    67: "wo",
    68: "-",
    69: "xo",
    70: "do",
    72: "g",
    73: "fo",
    74: "co",
    75: "two",
    76: "ro",
    77: "for",
    78: "dg",
    79: "worst",
    80: "u",
    81: "qu",
    82: "su",
    83: "now",
    84: "eu",
    86: "du",
    87: "down",
    88: "but",
    89: "fu",
    90: "cu",
    91: "cannot",
    92: "ru",
    93: "before",
    94: "course",
    95: "because",
    96: "l",
    97: "al",
    98: "sl",
    99: "will",
    100: "el",
    102: "dl",
    103: "well",
    104: "gi",
    105: "fl",
    106: "cl",
    107: "class",
    108: "rl",
    116: "ly",
    118: "ould",
    119: "would",
    120: "tion",
    121: "from",
    122: "such",
    128: "p",
    129: "?",
    130: ")",
    132: "'",
    133: "xp",
    134: "s",
    136: "<Backspace>",
    139: "past",
    140: "rp",
    141: "part",
    142: "step",
    144: "m",
    145: "am",
    146: "sm",
    148: "em",
    149: "may",
    150: "seem",
    151: "same",
    152: "tm",
    156: "rm",
    159: "came",
    160: "k",
    161: "ak",
    162: "sk",
    163: "ask",
    164: "ke",
    167: "asked",
    170: "ck",
    172: "rk",
    173: "take",
    176: "mi",
    177: "main",
    181: "make",
    187: "back",
    188: "them",
    192: ";",
    196: "o'",
    200: "top",
    202: "stop",
    204: "pro",
    208: "mo",
    214: "some",
    216: "put",
    218: "most",
    220: "more",
    221: "from",
    222: "come",
    224: "lp",
    240: "lm",
    256: "<Shift>",
    257: "A",
    258: "S",
    259: "W",
    260: "E",
    261: "X",
    262: "D",
    264: "T",
    265: "F",
    266: "C",
    268: "R",
    272: "N",
    273: "Q",
    274: "J",
    276: "Y",
    280: "B",
    288: "I",
    289: "<Ctrl>",
    290: "Z",
    292: "<",
    296: "V",
    304: "H",
    320: "O",
    321: "<Alt>",
    322: ">",
    324: "_",
    326: "->",
    328: "G",
    336: "U",
    346: "constructor",
    352: "L",
    384: "P",
    385: "/",
    386: "<Esc>",
    388: '"',
    392: "\n",
    400: "M",
    416: "K",
    448: ":",
    480: "->",
    512: " ",
    768: "\t"
  };

  $(document).ready(function() {
    return $(".asetniop").each(function() {
      var gesture, hasNewKeys, sticky, t,
        _this = this;
      gesture = 0;
      sticky = 0;
      hasNewKeys = false;
      $.extend(this.style, {
        backgroundImage: 'url(http://asetniop.com/images/LayoutCompleteLetters.png)',
        backgroundSize: '50%',
        backgroundPosition: '100% 100%',
        backgroundRepeat: 'no-repeat no-repeat'
      });
      $.defineProperty(this, 'caretPos', {
        get: function() {
          var sel;
          _this.focus();
          switch (true) {
            case 'selection' in document:
              sel = document.selection.createRange();
              sel.moveStart('character', _this.value.length);
              return sel.text.length;
            case 'selectionStart' in _this:
              return _this.selectionStart;
            default:
              return _this.value.length;
          }
        },
        set: function(pos) {
          var range;
          switch (true) {
            case 'setSelectionRange' in _this:
              _this.focus();
              return _this.setSelectionRange(pos, pos);
            case 'createTextRange' in _this:
              range = _this.createTextRange();
              range.collapse(true);
              range.moveEnd('character', pos);
              range.moveStart('character', pos);
              return range.select();
          }
        }
      });
      t = $(this);
      t.bind('keydown', function(evt) {
        gesture = gesture | sticky | KeyMap[evt.keyCode];
        console.log(evt.type, "" + evt.keyCode + " -> " + KeyMap[evt.keyCode] + " + " + sticky + " == " + gesture);
        hasNewKeys = true;
        return false;
      });
      return t.bind('keyup', function(evt) {
        var c, code, modified, value;
        value = Combos[gesture];
        console.log(evt.type, "" + evt.keyCode + " -> " + KeyMap[evt.keyCode] + " + " + sticky + " == " + gesture + " (" + value + ")");
        modified = false;
        if (hasNewKeys) {
          if (/^<\w+>$/.test(value)) {
            switch (value) {
              case "<Backspace>":
                c = this.caretPos;
                this.value = $.stringSplice(this.value, c - 1, c, '');
                this.caretPos = c - 1;
                modified = true;
                break;
              case "<Shift>":
                if ((sticky & 256) === 256) {
                  sticky = sticky ^ (sticky & 256);
                } else {
                  sticky = sticky | 256;
                }
            }
          } else if (value != null) {
            c = this.caretPos;
            this.value = $.stringSplice(this.value, c, c, value);
            this.caretPos = c + value.length;
            modified = true;
          }
        }
        code = KeyMap[evt.keyCode];
        gesture = gesture ^ (gesture & code);
        if (modified) {
          gesture = gesture ^ (gesture & sticky);
          sticky = 0;
          hasNewKeys = false;
        }
        return false;
      });
    });
  });

}).call(this);
