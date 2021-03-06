import { StreamStats } from './stream-stats.model';

/**
 * The connection statistics of the remote stream.
 */
export interface RemoteStreamStats extends StreamStats {
  /** Bytes of the received audio. */
  audioReceiveBytes: string;
  /** Delay in receiving the audio (ms).
   *
   * Delay from sending to playing the audio, only supported by Chrome for now.
   */
  audioReceiveDelay: string;
  /** Packets of the received audio. */
  audioReceivePackets: string;
  /** Number of lost packets of the received audio. */
  audioReceivePacketsLost: string;
  /** Delay from sending to receiving data. */
  endToEndDelay: string;
  /** Bytes of the received video. */
  videoReceiveBytes: string;
  /** Decode frame rate after the video is received. */
  videoReceiveDecodeFrameRate: string;
  /** Delay in receiving the video (ms).
   *
   * Delay from sending to playing the video, only supported by Chrome for now.
   */
  videoReceiveDelay: string;
  /** Frame rate rof the received video. */
  videoReceiveFrameRate: string;
  /** Packets of the received video. */
  videoReceivePackets: string;
  /** Number of lost packets of the received video. */
  videoReceivePacketsLost: string;
  /** Resolution height of the received video. */
  videoReceivedResolutionHeight?: string;
  /** Resolution width of the received video. */
  videoReceivedResolutionWidth?: string;
}
